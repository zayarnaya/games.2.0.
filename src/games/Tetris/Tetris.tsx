import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Tetris.module.scss';
import { colors, defaults, dimensions, lineScore } from './consts';
import { getDefaultPlayfield, getRandomTetromino, isValidMove, rotate } from './helpers';
import { Playfield, Sequence } from './types';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import { RulesLayout } from '../../views/layouts/RulesLayout/RulesLayout';
import { Patch } from '../../views/components/Patch/Patch';
import { Timer } from '../../views/components/Timer/Timer';
import { Button } from '../../views/components/Button/Button';
import rules from './rules.html';
import { Score } from '../../views/components/Score/Score';
import { Modal } from '../../views/components';

export const Tetris:FC = () => {
    const { width, height, cellSize, figWidth, figHeight } = dimensions;
    const [playField, setPlayField] = useState<Playfield>([]);

    const [currentTetromino, setCurrentTetromino] = useState(null);
    const [nextTetromino, setNextTetromino] = useState(null);

    const [isGameStarted, setGameStarted] = useState(false);
    const [pause, setPause] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const [score, setScore] = useState(0);
    const [lineCount, setLineCount] = useState(0);
    const [speed, setSpeed] = useState(1000);
    const [level, setLevel] = useState(1);
    const [time, setTime] = useState('00:00:00');
    const [tick, setTick] = useState(false);

    const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);
    const [ctxFigure, setCtxFigure] = useState<CanvasRenderingContext2D>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRefFigure = useRef<HTMLCanvasElement>(null);
    const timerRef = useRef<HTMLDivElement>(null);
    const timestampRef = useRef(null);

    const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);

    const {score: bestScore, lineCount: bestLineCount, time: bestTime} = JSON.parse(localStorage.getItem('tetris-score')) || {
        score: defaults.score,
        lineCount: defaults.lineCount,
        time: defaults.time,
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasFigure = canvasRefFigure.current;
        if (canvas && canvasFigure) {
          const context = canvas.getContext('2d');
          const contextFigure = canvasFigure.getContext('2d');
          if (context && contextFigure) {
            context.fillStyle = 'rgba(255, 255, 255, 0)';
            context.strokeStyle = 'rgba(0, 0, 0, 1)';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            setCtx(context);
            setCtxFigure(contextFigure);
          }
        }

    }, []);

    useEffect(() => {
        if (ctx) setDefaults();
    }, [ctx])

    useEffect(() => {
        if (isGameStarted && !pause) requestAnimationFrame(loop);
    }, [tick, currentTetromino, nextTetromino])


    const drawField = () => {
        ctx.beginPath();
        for (let i = 0; i < width; i++) {
            ctx.moveTo(cellSize * i, 0);
            ctx.lineTo(cellSize * i, cellSize * height);
        }
        for (let k = 0; k < height; k++) {
            ctx.moveTo(0, cellSize * k);
            ctx.lineTo(cellSize * width, cellSize * k);
        }

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.stroke();
    }

    const setDefaults = () => {
        setPlayField(getDefaultPlayfield());
        setScore(defaults.score);
        setLevel(defaults.level);
        setLineCount(defaults.lineCount);
        setSpeed(defaults.speed);
        setGameStarted(defaults.isGameStarted);
        setGameOver(defaults.gameOver);
        setPause(defaults.pause)
        setCurrentTetromino(getRandomTetromino());
        setNextTetromino(getRandomTetromino());
        setTime(defaults.time);
    }

    const loop = useCallback(() => {
        if (pause) {
            return;
        }

        if (ctx) {
            const context = ctx;
            const contextFigure = ctxFigure;
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            drawField();

            let upperRow = 0;
            for (let row = 0; row < height; row++) {
                let filled = 0;
                for (let col = 0; col < width; col++) {
                    if (playField[row][col]) {
                        filled++;
                        const name = playField[row][col];
                        context.fillStyle = name ? colors[name as Sequence] : 'white';
                        context.fillRect(col * cellSize, row * cellSize, cellSize - 1, cellSize - 1);
                    }
                }
                if (filled) {
                    upperRow++;
                }
            }

            // следующая фигура
            if (nextTetromino) {
                contextFigure.clearRect(0, 0, canvasRefFigure.current.width, canvasRefFigure.current.height);
                for (let i = 0; i < nextTetromino.matrix.length; i++) {
                    for (let k = 0; k < nextTetromino.matrix[i].length; k++) {
                        let margin = 1.5;
                        if (nextTetromino.name === 'I') margin = 1;
                        if (nextTetromino.name === 'O') margin = 2;
                       
                        contextFigure.fillStyle = colors[nextTetromino.name as Sequence];
                        if (nextTetromino.matrix[i][k]) {
                            contextFigure.fillRect(
                                (k + margin) * (cellSize),
                                (i + margin) * (cellSize),
                                cellSize - 1,
                                cellSize - 1,
                            )
                        }
                    }
                }
            }

            // опускаем фигуру

            if (currentTetromino) {
                const current = currentTetromino;
                current.row++;
                if (!isValidMove(current, playField)) {
                    current.row--;
                    setCurrentTetromino(current);
                    placeTetromino();
                }

                // закрашиваем

                context.fillStyle = gameOver ? 'gray' : colors[currentTetromino.name as Sequence];
                // setCtx({...ctx, fillStyle: gameOver ? 'gray' : colors[currentTetromino.name as Sequence]});
                for (let row = 0; row < currentTetromino.matrix.length; row++) {
                    for (let col = 0; col < currentTetromino.matrix[row].length; col++) {
                        if (currentTetromino.matrix[row][col]) {
                            context.fillRect(
                            (currentTetromino.col + col) * cellSize,
                            (currentTetromino.row + row) * cellSize,
                            cellSize - 1,
                            cellSize - 1,
                            );
                        }
                    }
                }
            }
            setCtx(context);
            setCtxFigure(contextFigure);
        }
    }, [ctx, playField, currentTetromino, nextTetromino])

    timestampRef.current = setTimeout(() => {
        if (isGameStarted && !pause) setTick(!tick)
    }, speed);

    const onStartGame = () => {
        setGameStarted(true);
        setPause(false);
    }

    const onRestartGame = () => {
        setGameOver(false);
        setDefaults();
        onStartGame();
    }

    const getTime = () => timerRef.current.dataset.time;

    const onEndGame = () => {
        const newTime = getTime();
        const dataToSave = {
            score: Math.max(score, bestScore), 
            lineCount: Math.max(lineCount, bestLineCount), 
            time: newTime.localeCompare(bestTime) > 0 ? newTime : bestTime};
        localStorage.setItem('tetris-score', JSON.stringify(dataToSave));
        setGameOver(true);
        setGameStarted(false);
        if (pause) setPause(false);
        setTime(newTime);
        if (isGameStarted) setIsFinishModalOpen(true);
    }

    const onPause = () => {
        setPause(!pause);
    }

    const onKeyDown = (e: KeyboardEvent) => {
        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW': {
              const matrix = rotate(currentTetromino.matrix);
              if (isValidMove({...currentTetromino, matrix }, playField)) {
                setCurrentTetromino({...currentTetromino, matrix});
              }
              break;
            }
            case 'ArrowDown':
            case 'KeyS': {
              const row = currentTetromino.row + 1;
              if (!isValidMove({ ...currentTetromino, row }, playField)) {
                setCurrentTetromino({...currentTetromino, row});
                placeTetromino();
                return;
              }
                setCurrentTetromino({...currentTetromino, row});
              setScore(score + 1);
              break;
            }
            case 'ArrowLeft':
            case 'KeyA': {
              const col = currentTetromino.col - 1;
              if (isValidMove({ ...currentTetromino, col }, playField)) {
                setCurrentTetromino({...currentTetromino, col});
              }
              break;
            }
            case 'ArrowRight':
            case 'KeyD': {
              const col = currentTetromino.col + 1;
              if (isValidMove({ ...currentTetromino, col }, playField)) {
                setCurrentTetromino({...currentTetromino, col});
              }
              break;
            }
            case 'KeyP': {
                onPause();
              break;
            }
            case 'Space': {
                let scoreNow = score;
              while (isValidMove(currentTetromino, playField)) {
                setCurrentTetromino({currentTetromino, row: currentTetromino.row++})

                scoreNow += 2;
              }
      
              if (!isValidMove(currentTetromino, playField)) {
                setCurrentTetromino({...currentTetromino, row: currentTetromino.row--});
                placeTetromino();
                setScore(scoreNow - 2);
              }
              break;
            }
            case 'Enter': {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
              } else if (document.exitFullscreen) {
                document.exitFullscreen();
              }
              break;
            }
          }
    }

    const placeTetromino = () => {
        let linesAtOnce = 0;
        const newPlayfield = [...playField];
        for (let row = 0; row < currentTetromino.matrix.length; row++) {
            for (let col = 0; col < currentTetromino.matrix[row].length; col++) {
                if (currentTetromino.matrix[row][col]) {
                    if (currentTetromino.row + row < 0) {
                        // onEndGame();
                        console.log('END???');
                    }
                    newPlayfield[currentTetromino.row + row][currentTetromino.col + col] = currentTetromino.name;
                }
            }
        }

        // убираем линию
        for (let row = playField.length - 1; row >= 0;) {
            if (playField[row].every(cell => !!cell)) {
                linesAtOnce++;
                let lines = lineCount;
                lines++;

                if (lines >= 10 && lines % 10 === 0) {
                    setLevel(level + 1);
                    setSpeed(speed - 50);
                }

                for (let i = row; i > 0; i--) {
                    for (let k = 0; k < playField[i].length; k++) {
                        console.log(i, k);
                        console.log(newPlayfield[i][k])
                        console.log(newPlayfield[i - 1][k]);
                        newPlayfield[i][k] = newPlayfield[i - 1][k];
                    }
                }
                setLineCount(lines);
            } else {
                row--;
            }
        }

        // очки
        const ratio = lineScore[linesAtOnce] ?? 1200;
        setScore(score + ratio * (level + 1));

        // заканчиваем игру, если вверху есть фигура и упирается в верх
        for (let i = 0; i < playField[0].length; i++) {
            if (playField[0][i] !== undefined) {
                onEndGame();
            }
        }

        // следующая фигура
        setCurrentTetromino(nextTetromino);
        setNextTetromino(getRandomTetromino());
        setPlayField(newPlayfield);
    }


    return (
        <GameLayout>
            {isFinishModalOpen && <Modal onClose={() => setIsFinishModalOpen(false)}>
                    <p>Игра закончена! <br />
                    Ваш счет {score}, вы убрали {lineCount} линий за {time}.<br />
                    Поздравляем!</p><br />
                    <Button onClick={onRestartGame}>Новая игра</Button>
                </Modal>}
            <div className={classNames(styles['field-tetris'])}>

                {pause && <Patch game='tetris' /> }

                <canvas ref={canvasRef} id="canvas" width={cellSize * width} height={cellSize * height}>
                </canvas>
            </div>
            <RulesLayout>
                <Timer ref={timerRef} time={time} pause={isGameStarted ? pause : true} />
                <Score>{score}</Score>
                <div>Уровень {level}</div>
                <div>Убрали линий {lineCount}</div>
                <div>Рекорд: {bestScore}</div>
                <div>Максимальное количество убранных линий: {bestLineCount}</div>
                <div>Самая долгая игра: {bestTime}</div>
                <div>
                    <h3>Игровое меню</h3>
                    <p>следующая фигура</p>
                    <canvas className={styles['next-figure']} ref={canvasRefFigure} id="canvas-figure" width={figWidth * cellSize} height={figHeight * cellSize}></canvas>
                    <div>
                        <Button onClick={onRestartGame} size={'md'}>{isGameStarted ? "Играть заново" : "Начать игру"}</Button>
                        <Button size={'md'} disabled={!isGameStarted} onClick={onEndGame}>
                            Закончить игру
                        </Button>
                        <Button size='md' disabled={!isGameStarted} onClick={onPause}>{pause ? 'Вернуться к игре' : 'Пауза'}</Button>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: rules }} />
            </RulesLayout>
        </GameLayout>

    );
}
