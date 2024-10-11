import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Tetris.module.scss';
import { colors, defaults, dimensions, lineScore } from './consts';
import {
	colorField,
	colorTetromino,
	drawField,
	getDefaultPlayfield,
	getRandomTetromino,
	isValidMove,
	rotate,
} from './helpers';
import { Playfield, Sequence } from './types';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import { RulesLayout } from '../../views/layouts/RulesLayout/RulesLayout';
import { Patch } from '../../views/components/Patch/Patch';
import { Timer } from '../../views/components/Timer/Timer';
import { Button } from '../../views/components/Button/Button';
import rules from './rules.html';
import { Score } from '../../views/components/Score/Score';
import { Modal } from '../../views/components';
import { copyMatrix } from '../../utils';
import Confetti from 'react-confetti';

export const Tetris: FC = () => {
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

	const {
		score: bestScore,
		lineCount: bestLineCount,
		time: bestTime,
	} = JSON.parse(localStorage.getItem('tetris-score')) || {
		score: defaults.score,
		lineCount: defaults.lineCount,
		time: defaults.time,
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
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
	}, [ctx]);

	useEffect(() => {
		if ((isGameStarted || gameOver) && !pause) requestAnimationFrame(loop);
	}, [tick, currentTetromino, nextTetromino]);

	const setDefaults = () => {
		setPlayField(getDefaultPlayfield());
		setScore(defaults.score);
		setLevel(defaults.level);
		setLineCount(defaults.lineCount);
		setSpeed(defaults.speed);
		setGameStarted(defaults.isGameStarted);
		setGameOver(defaults.gameOver);
		setPause(defaults.pause);
		setCurrentTetromino(getRandomTetromino());
		setNextTetromino(getRandomTetromino());
		setTime(defaults.time);
	};

	const loop = useCallback(() => {
		if (pause) {
			return;
		}

		if (ctx) {
			const context = ctx;
			const contextFigure = ctxFigure;
			context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
			drawField(context);
			colorField(context, playField);

			// следующая фигура
			if (nextTetromino) {
				contextFigure.clearRect(0, 0, canvasRefFigure.current.width, canvasRefFigure.current.height);
				for (let i = 0; i < nextTetromino.matrix.length; i++) {
					for (let k = 0; k < nextTetromino.matrix[i].length; k++) {
						let margin = 1.5;
						if (nextTetromino.name === 'I') margin = 1;

						contextFigure.fillStyle = colors[nextTetromino.name as Sequence];
						if (nextTetromino.matrix[i][k]) {
							contextFigure.fillRect(
								(k + (nextTetromino.name === 'O' ? 2 : margin)) * cellSize,
								(i + margin) * cellSize,
								cellSize - 1,
								cellSize - 1
							);
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

				colorTetromino(context, currentTetromino, gameOver ? 'lightgray' : colors[currentTetromino.name as Sequence]);
			}
			setCtx(context);
			setCtxFigure(contextFigure);
		}
	}, [ctx, playField, currentTetromino, nextTetromino, gameOver]);

	timestampRef.current = setTimeout(() => {
		if (isGameStarted && !pause) setTick(!tick);
	}, speed);

	const onStartGame = useCallback(() => {
		setGameStarted(true);
		setPause(false);
		canvasRef.current.focus();
	}, [isGameStarted, pause, canvasRef]);

	const onRestartGame = useCallback(() => {
		setGameOver(false);
		setDefaults();
		onStartGame();
	}, [gameOver]);

	const getTime = () => timerRef.current.dataset.time;

	const onEndGame = useCallback(() => {
		const newTime = getTime();
		const dataToSave = {
			score: Math.max(score, bestScore),
			lineCount: Math.max(lineCount, bestLineCount),
			time: newTime.localeCompare(bestTime) > 0 ? newTime : bestTime,
		};
		localStorage.setItem('tetris-score', JSON.stringify(dataToSave));
		setTime(newTime);
		if (isGameStarted) setIsFinishModalOpen(true);
		setGameOver(true);
		setGameStarted(false);
		if (pause) setPause(false);
		colorField(ctx, playField, 'lightgray');
	}, [time, isGameStarted, gameOver, pause, ctx]);

	const onPause = useCallback(() => {
		setPause(!pause);
		if (!pause) canvasRef.current.focus();
	}, [pause, canvasRef]);

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			case 'ArrowUp':
			case 'KeyW': {
				const matrix = rotate(currentTetromino.matrix);
				if (isValidMove({ ...currentTetromino, matrix }, playField)) {
					setCurrentTetromino({ ...currentTetromino, matrix });
				}
				break;
			}
			case 'ArrowDown':
			case 'KeyS': {
				const row = currentTetromino.row + 1;
				if (!isValidMove({ ...currentTetromino, row }, playField)) {
					setCurrentTetromino({ ...currentTetromino, row });
					placeTetromino();
					return;
				}
				setCurrentTetromino({ ...currentTetromino, row });
				setScore(score + 1);
				break;
			}
			case 'ArrowLeft':
			case 'KeyA': {
				const col = currentTetromino.col - 1;
				if (isValidMove({ ...currentTetromino, col }, playField)) {
					setCurrentTetromino({ ...currentTetromino, col });
				}
				break;
			}
			case 'ArrowRight':
			case 'KeyD': {
				const col = currentTetromino.col + 1;
				if (isValidMove({ ...currentTetromino, col }, playField)) {
					setCurrentTetromino({ ...currentTetromino, col });
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
					setCurrentTetromino({ currentTetromino, row: currentTetromino.row++ });

					scoreNow += 2;
				}

				if (!isValidMove(currentTetromino, playField)) {
					setCurrentTetromino({ ...currentTetromino, row: currentTetromino.row-- });
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
	};

	const placeTetromino = () => {
		try {
			let linesAtOnce = 0;
			const newPlayfield = copyMatrix(playField);
			let ended = false;
			for (let row = 0; row < currentTetromino.matrix.length; row++) {
				for (let col = 0; col < currentTetromino.matrix[row].length; col++) {
					if (currentTetromino.matrix[row][col]) {
						if (currentTetromino.row + row < 0) {
							onEndGame(); // куда-то сюда вставить перекрас
							ended = true;
						}
						if (!ended) newPlayfield[currentTetromino.row + row][currentTetromino.col + col] = currentTetromino.name;
					}
				}
			}

			// убираем линию
			let row = playField.length - 1;
			while (row >= 0) {
				if (newPlayfield[row].every(cell => !!cell)) {
					linesAtOnce++;
					let lines = lineCount;
					lines++;

					if (lines >= 10 && lines % 10 === 0) {
						setLevel(level + 1);
						setSpeed(speed - 50);
					}

					for (let i = row; i > 0; i--) {
						for (let k = 0; k < playField[i].length; k++) {
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
					return;
				}
			}

			// следующая фигура
			setCurrentTetromino(nextTetromino);
			setNextTetromino(getRandomTetromino());
			setPlayField(newPlayfield);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<GameLayout>
			{gameOver && <Confetti />}
			{isFinishModalOpen && (
				<Modal onClose={() => setIsFinishModalOpen(false)}>
					<p>
						Игра закончена! <br />
						Ваш счет {score}, вы убрали {lineCount} линий за {time}.<br />
						Поздравляем!
					</p>
					<br />
					<Button onClick={onRestartGame}>Новая игра</Button>
				</Modal>
			)}
			<div className={classNames(styles['field-tetris'])}>
				{pause && <Patch game='tetris' />}

				<canvas ref={canvasRef} id='canvas' width={cellSize * width} height={cellSize * height} tabIndex={0}></canvas>
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
					<div className={styles['next-figure__container']}>
						<p>следующая фигура</p>
						<canvas
							className={styles['next-figure__canvas']}
							ref={canvasRefFigure}
							id='canvas-figure'
							width={figWidth * cellSize}
							height={figHeight * cellSize}
						></canvas>
					</div>
					<div>
						<Button onClick={onRestartGame} size={'md'}>
							{isGameStarted ? 'Играть заново' : 'Начать игру'}
						</Button>
						<Button size={'md'} disabled={!isGameStarted} onClick={onEndGame}>
							Закончить игру
						</Button>
						<Button size='md' disabled={!isGameStarted} onClick={onPause}>
							{pause ? 'Вернуться к игре' : 'Пауза'}
						</Button>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: rules }} />
			</RulesLayout>
		</GameLayout>
	);
};
