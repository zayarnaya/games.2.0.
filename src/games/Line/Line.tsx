import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { LineItem } from './types';
import type { RootState } from '../../store/store';
import { checkHorizontal, checkVertical } from './helpers';
import { defaultItem } from './consts';
import rules from './rules.html';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import { Button } from '../../views/components/Button/Button';
import { LineButton } from './components/LineButton/LineButton';
import { LineField } from './components/LineField/LineField';
import { LineLayout } from './layouts/LineLayout/LineLayout';
import { RulesLayout } from '../../views/layouts/RulesLayout/RulesLayout';
import {
	onStartGame,
	onDeleteChars,
	onNext,
	onUndo,
	onRestart,
	onLoadGame,
	startTimer,
	onVictory,
	onContinue,
	saveTimer,
} from '../../store/slices/LineSlice';
import { Timer } from '../../views/components/Timer/Timer';
import { Patch } from '../../views/components/Patch/Patch';
import { Score } from '../../views/components/Score/Score';
import { Modal } from '../../views/components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Confetti from 'react-confetti';

export const Line = () => {
	const {
		arr: defaultArray,
		history: defaultHistory,
		timer,
		score,
		win,
		fail,
		continued,
		started: hasGameStarted,
	} = useAppSelector((state: RootState) => state.line);
	const dispatch = useAppDispatch();

	const [pause, setPause] = useState(false);
	const [coords, setCoords] = useState(-1);
	const [arr, setArr] = useState<LineItem[]>(defaultArray);
	const [history, setHistory] = useState(defaultHistory);
	const [highscore, setHighscore] = useState(+localStorage.getItem('line-highscore') || 0);
	const [bestTime, setBestTime] = useState(localStorage.getItem('line-besttime') || '99:99:99');

	const [isWinModalOpen, setIsWinModalOpen] = useState(false);
	const [isFailModalOpen, setIsFailModalOpen] = useState(false);
	const [isEndModalOpen, setIsEndModalOpen] = useState(false);

	const [time, setTime] = useState<string>(timer);

	const timerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		dispatch(saveTimer(getTime()));
	}, [time]);

	useEffect(() => {
		setArr(defaultArray);
		setHistory(defaultHistory);
	}, [defaultArray, defaultHistory]);

	useEffect(() => {
		if (win) onWin();
	}, [win]);

	useEffect(() => {
		if (fail && !continued) onFail();
	}, [fail, continued]);

	const saveHighscore = () => {
		localStorage.setItem('line-highscore', Math.max(highscore, score).toString());
		setHighscore(Math.max(highscore, score));
	};

	const saveBestTime = () => {
		const time = getTime();
		const best = time < bestTime ? time : bestTime;
		localStorage.setItem('line-besttime', best);
		setBestTime(best);
	};

	const onWin = () => {
		setIsWinModalOpen(true);
		saveHighscore();
		saveBestTime();
	};

	const onFail = () => {
		setIsFailModalOpen(true);
		saveHighscore();
	};

	const onEndGame = useCallback(() => {
		setIsEndModalOpen(true);
		saveHighscore();
	}, []);

	const onWinModalClose = useCallback(() => setIsWinModalOpen(false), []);
	const onFailModalClose = useCallback(() => {
		setIsFailModalOpen(false);
		dispatch(onContinue());
	}, []);
	const onFailAndRestart = useCallback(() => {
		setIsFailModalOpen(false);
		dispatch(onRestart());
	}, []);
	const onEndGameModalClose = useCallback(() => {
		setIsEndModalOpen(false);
		dispatch(onRestart());
	}, []);

	const handleClick = (index: number) => {
		if (!hasGameStarted) {
			dispatch(onStartGame());
			dispatch(startTimer());
		}
		if (coords === -1) {
			setCoords(index);
			const newArr = [...arr];
			newArr[index] = { ...newArr[index], active: true };
			setArr(newArr);
		} else if (coords === index) {
			setCoords(-1);
			const newArr = [...arr];
			newArr[index] = { ...newArr[index], active: false };
			setArr(newArr);
		} else {
			if (checkHorizontal(arr, coords, index) || checkVertical(arr, coords, index)) {
				dispatch(
					onDeleteChars({
						idx: [index, coords],
						length: arr.length,
					})
				);
				setCoords(-1);
			}
		}
	};
	const onSubmit = () => {
		const submitArr = [...arr];
		const arr2Copy = submitArr.filter(item => !item.deleted).map(item => item.value);
		if (!arr2Copy.length) {
			dispatch(onVictory());
			return;
		}
		for (const num of arr2Copy) {
			submitArr.push({ ...defaultItem, value: num });
		}

		dispatch(onNext(submitArr));
	};

	const onStart = () => {
		saveHighscore();
		dispatch(onRestart());
	};

	const onUndoMove = () => {
		dispatch(onUndo());
		setCoords(-1);
	};

	const onSave = () => {
		const arr2save = [...arr];
		if (coords >= 0) arr2save[coords].active = false;
		const timer = getTime();
		localStorage.setItem(
			'line-save',
			JSON.stringify({
				history,
				arr: arr2save,
				timer,
				score,
			})
		);
	};

	const onLoad = () => {
		const state2loadRaw = localStorage.getItem('line-save');
		if (typeof state2loadRaw != 'undefined') {
			const state2load = JSON.parse(state2loadRaw);
			dispatch(onLoadGame(state2load));
		}
	};

	const onPause = () => {
		setPause(!pause);
	};

	const getTime = () => {
		if (timerRef.current) {
			return timerRef.current.dataset?.time;
		}
		return null;
	};

	const handleTimerChange = useCallback((time: string) => setTime(time), [time]);

	return (
		<GameLayout>
			{win && <Confetti />}
			{isFailModalOpen && (
				<Modal onClose={onFailModalClose}>
					Пожалуй, выиграть уже не получится
					<br />
					Ваш счет {score}
					<br />
					<Button size='sm' onClick={onFailModalClose}>
						Продолжить
					</Button>
					<Button size='sm' onClick={onFailAndRestart}>
						Новая игра
					</Button>
				</Modal>
			)}
			{isEndModalOpen && (
				<Modal onClose={onEndGameModalClose}>
					Вы завершили игру!
					<br />
					Ваш счет {score}
					<br />
				</Modal>
			)}
			{isWinModalOpen && (
				<Modal onClose={onWinModalClose}>
					Ура, победа!
					<br />
					Ваш счет {score}
				</Modal>
			)}
			<LineLayout>
				<LineField>
					{pause && <Patch game='line' />}
					{arr.map((item, index) => (
						<LineButton
							key={'line_button' + index}
							disabled={item.deleted}
							active={item.active}
							onClick={() => handleClick(index)}
						>
							{item.value}
						</LineButton>
					))}
				</LineField>
				<Button data-testid='submit_button' size={'sm'} onClick={onSubmit} floatRight={true}>
					Дальше
				</Button>
			</LineLayout>
			<RulesLayout>
				<Timer callback={handleTimerChange} ref={timerRef} time={timer} pause={pause || !hasGameStarted} />
				<Score>{score}</Score>
				<div>Рекорд: {highscore}</div>
				<div>Лучшее время: {bestTime}</div>
				<div>
					<h3>Игровое меню</h3>
					<div>
						<Button onClick={onStart} size={'md'}>
							{win || fail ? 'Новая игра' : 'Начать заново'}
						</Button>
						<Button size={'md'} disabled={history.length === 0} onClick={onUndoMove}>
							Отменить ход
						</Button>
						<Button size={'md'} onClick={onSave}>
							Сохранить
						</Button>
						<Button size={'md'} onClick={onLoad}>
							Загрузить
						</Button>
						<Button size={'md'} onClick={onEndGame}>
							Закончить игру
						</Button>
						<Button size='md' disabled={!hasGameStarted} onClick={onPause}>
							{pause ? 'Вернуться к игре' : 'Пауза'}
						</Button>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: rules }} />
				{/* <div /> */}
			</RulesLayout>
		</GameLayout>
	);
};
