import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { onDeleteChars, onNext, onUndo, onRestart, onLoadGame, startTimer, onVictory } from '../../store/slices/LineSlice';
import { Timer } from '../../views/components/Timer/Timer';
import { Patch } from '../../views/components/Patch/Patch';
import { Score } from '../../views/components/Score/Score';


export const Line = () => {
	const { arr: defaultArray, history: defaultHistory, timer, score, win, fail } = useSelector((state: RootState) => state.line);
	const dispatch = useDispatch();

	const [hasGameStarted, setHasGameStarted] = useState(false);
	const [pause, setPause] = useState(false);
	const [coords, setCoords] = useState(-1);
	const [arr, setArr] = useState<LineItem[]>(defaultArray);
	const [history, setHistory] = useState(defaultHistory);
	const [highscore, setHighscore] = useState(+localStorage.getItem('line-highscore') || 0);
	const [bestTime, setBestTime] = useState(localStorage.getItem('line-besttime') || '99:99:99');

	const timerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setArr(defaultArray);
		setHistory(defaultHistory);
	}, [defaultArray, defaultHistory]);

	useEffect(() => {
		if (win) onWin();
	}, [win]);

	useEffect(() => {
		if (fail) onFail();
	})

	const saveHighscore = () => {
		localStorage.setItem('line-highscore', (Math.max(highscore, score)).toString())
		setHighscore(Math.max(highscore, score));
	}

	const saveBestTime = () => {
		const time = getTime();
		const best = time < bestTime ? time : bestTime;
		localStorage.setItem('line-besttime', best);
		setBestTime(best);
	}

	const onWin = () => {
		alert('ПОБЕДА');
		saveHighscore();
		saveBestTime();
	}

	const onFail = () => {
		alert('Пожалуй, выиграть уже не получится\nВаш счет ' + score);
		saveHighscore();
	}


	const handleClick = (index: number) => {
		if (!hasGameStarted) {
			setHasGameStarted(true);
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
				dispatch(onDeleteChars({
					idx: [index, coords],
					length: arr.length,
				}));
				setCoords(-1);
			}
		}
	};
	const onSubmit = () => {
		const submitArr = [...arr];
		const arr2Copy = submitArr.filter(item => !item.deleted).map(item => item.value);
		if (!arr2Copy.length) {
			alert('Ура, победа!');
			dispatch(onVictory());
			return;
		}
		for (let num of arr2Copy) {
			submitArr.push({ ...defaultItem, value: num });
		}
		dispatch(onNext(submitArr))
	};

	const onStart = () => {
		saveHighscore();
		dispatch(onRestart());
		setHasGameStarted(false);
	};

	const onUndoMove = () => {
		dispatch(onUndo());
		setCoords(-1);
	};

	const onSave = () => {
		const arr2save = [...arr];
		if (coords >= 0) arr2save[coords].active = false;
		const timer = getTime();
		localStorage.setItem('line-save', JSON.stringify({
			history,
			arr: arr2save,
			timer,
			score,
		}));
	};

	const onLoad = () => {
		const state2loadRaw = localStorage.getItem('line-save');
		if (typeof state2loadRaw != 'undefined') {
			const state2load = JSON.parse(state2loadRaw);
			dispatch(onLoadGame(state2load));
			setHasGameStarted(true);
		}
	};

	const onPause = () => {
		setPause(!pause);
	}

	const getTime = () => {
		if (timerRef.current) {
			return timerRef.current.dataset?.time;
		}
		return null;
	}

	return (
		<GameLayout>
			<LineLayout>
				<LineField>
					{pause && <Patch game='line' /> }
					{arr.map((item, index) => (
						<LineButton disabled={item.deleted} active={item.active} onClick={() => handleClick(index)}>
							{item.value}
						</LineButton>
					))}
				</LineField>
				<Button size={'sm'} onClick={onSubmit} floatRight={true}>Дальше</Button>
			</LineLayout>
			<RulesLayout>
				<Timer ref={timerRef} time={timer} pause={pause} />
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
						<Button size='md' disabled={!hasGameStarted} onClick={onPause}>{pause ? 'Вернуться к игре' : 'Пауза'}</Button>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: rules }} />
			</RulesLayout>
		</GameLayout>
	);
};
