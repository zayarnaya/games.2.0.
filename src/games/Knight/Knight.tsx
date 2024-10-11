import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIndexFromRowAndCol, getRowAndCol } from './helpers';
import rules from './rules.html';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import { KnightButton } from './components/KnightButton/KnightButton';
import { KnightField } from './components/KnightField/KnightField';
import { RulesLayout } from '../../views/layouts/RulesLayout/RulesLayout';
import { Button } from '../../views/components/Button/Button';
import { Timer } from '../../views/components/Timer/Timer';
import { Score } from '../../views/components/Score/Score';
import { Patch } from '../../views/components/Patch/Patch';
import type { RootState } from '../../store/store';
import {
	onStartGame,
	saveTimer,
	onNextMove,
	setWrongMove,
	removeWrongMove,
	onUndoMove,
	restart,
	onLoadGame,
	startTimer,
} from '../../store/slices/KnightSlice';
import { Modal } from '../../views/components';
import Confetti from 'react-confetti';

// todo проверить вин и фейл
export const Knight = () => {
	const {
		count,
		field,
		history,
		lastCoords,
		win,
		fail,
		time,
		started: hasGameStarted,
	} = useSelector((state: RootState) => state.knight);
	const [coords, setCoords] = useState(lastCoords);
	const [needHint, setNeedHint] = useState(false);
	const timerRef = useRef<HTMLDivElement>(null);
	const [pause, setPause] = useState(false);
	const [highscore, setHighscore] = useState(+localStorage.getItem('knight-highscore') || 0);
	const [bestTime, setBestTime] = useState(localStorage.getItem('knight-besttime') || '99:99:99');

	const [isWinModalOpen, setIsWinModalOpen] = useState(false);
	const [isFailModalOpen, setIsFailModalOpen] = useState(false);

	const [timer, setTimer] = useState<string>(time);

	const dispatch = useDispatch();

	useEffect(() => {
		if (win) onWin();
	}, [win]);
	useEffect(() => {
		if (fail) onFail();
	}, [fail]);
	useEffect(() => {
		dispatch(saveTimer(getTime()));
	}, [timer]);

	const saveHighscore = () => {
		localStorage.setItem('knight-highscore', Math.max(highscore, count).toString());
		setHighscore(Math.max(highscore, count));
	};

	const saveBestTime = () => {
		const time = getTime();
		const best = time < bestTime ? time : bestTime;
		localStorage.setItem('knight-besttime', best);
		setBestTime(best);
	};

	const handleTimerChange = useCallback((time: string) => setTimer(time), [timer]);

	const handleClick = (index: number) => {
		if (!coords.length) {
			dispatch(onStartGame());
			dispatch(startTimer());
		}
		const { row, col } = getRowAndCol(index);
		if (field[row][col].hint === true || !coords.length) {
			dispatch(onNextMove({ coords, coords2: [row, col] }));
			setCoords([row, col]);
		} else {
			dispatch(setWrongMove([row, col]));
			setTimeout(() => dispatch(removeWrongMove([row, col])), 1000);
		}
	};

	const onNeedHint = () => {
		setNeedHint(!needHint);
	};

	const onFail = () => {
		setIsFailModalOpen(true);
		saveHighscore();
	};

	const onWin = () => {
		setIsWinModalOpen(true);
		saveBestTime();
	};

	const onWinModalClose = useCallback(() => setIsWinModalOpen(false), []);
	const onFailModalClose = useCallback(() => setIsFailModalOpen(false), []);

	const onSave = () => {
		const data2save = {
			coords,
			count,
			field,
			time: getTime(),
		};
		localStorage.setItem('knight-save', JSON.stringify(data2save));
	};

	const onLoad = () => {
		const rawData = localStorage.getItem('knight-save');
		if (typeof rawData !== 'undefined') {
			const parsedData = JSON.parse(rawData);
			const { coords } = parsedData;
			setCoords(coords);
			dispatch(onLoadGame(parsedData));
		}
	};

	const onRestart = () => {
		saveHighscore();
		dispatch(restart());
		setCoords([]);
	};

	const onUndo = () => {
		dispatch(onUndoMove());
	};

	const getTime = () => {
		if (timerRef.current) {
			return timerRef.current.dataset.time;
		}
		return null;
	};

	const onPauseClick = () => {
		setPause(!pause);
	};

	const onDeleteHighscore = () => {
		localStorage.setItem('knight-highscore', '0');
	};

	return (
		<GameLayout>
			{win && <Confetti />}
			{isFailModalOpen && (
				<Modal onClose={onFailModalClose}>
					Вы проиграли :-(
					<br />
					Ваш счет {count}
				</Modal>
			)}
			{isWinModalOpen && (
				<Modal onClose={onWinModalClose}>
					Вы выиграли! <br />
					Ваше время {timerRef.current.dataset.time}
				</Modal>
			)}
			<KnightField>
				{pause && <Patch game='knight' />}
				{field.flat().map((item, index) => {
					return (
						<KnightButton
							hint={needHint && item.hint}
							needHint={needHint}
							onClick={() => handleClick(index)}
							disabled={item.value != 0}
							wrong={item.wrong}
							lastChosen={getIndexFromRowAndCol(+coords[0], +coords[1]) === index}
							key={`knight${index}`}
						>
							{item.value === 0 ? '' : item.value}
						</KnightButton>
					);
				})}
			</KnightField>
			<RulesLayout>
				<Timer callback={handleTimerChange} ref={timerRef} time={time} pause={pause || !hasGameStarted} />
				<Score>{count}</Score>
				<div>Рекорд: {highscore}</div>
				<div>Лучшее время: {bestTime}</div>
				<div>
					<h3>Игровое меню</h3>
					<div>
						<Button size={'md'} onClick={onNeedHint}>
							{needHint ? 'Выключить подсказку' : 'Включить подсказку'}
						</Button>
						<Button size={'md'} onClick={onSave}>
							Сохранить
						</Button>
						<Button size={'md'} onClick={onLoad}>
							Загрузить
						</Button>
						<Button size={'md'} onClick={onRestart}>
							{win || fail ? 'Новая игра' : 'Начать заново'}
						</Button>
						<Button size={'md'} onClick={onUndo} disabled={!history.length}>
							Отменить ход
						</Button>
						<Button size={'md'} onClick={onDeleteHighscore}>
							Сбросить рекорд
						</Button>
						<Button size='md' disabled={!hasGameStarted} onClick={onPauseClick}>
							{pause ? 'Вернуться к игре' : 'Пауза'}
						</Button>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: rules }} />
			</RulesLayout>
		</GameLayout>
	);
};
// todo история чтоб грузилась
// вынести константы хелперы типы
// стили причесать и разнести по цсс модулям
// написать алгос просчитать победные варианты
