import React, { useEffect, useState } from 'react';
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
import { onDeleteChars, onNext, onUndo, onRestart, onLoadGame } from '../../store/slices/LineSlice';


export const Line = () => {
	const { arr: defaultArray, history: defaultHistory } = useSelector((state: RootState) => state.line);
	const dispatch = useDispatch();

	const [coords, setCoords] = useState(-1);
	const [arr, setArr] = useState<LineItem[]>(defaultArray);
	const [history, setHistory] = useState(defaultHistory);

	useEffect(() => {
		setArr(defaultArray);
		setHistory(defaultHistory);
	}, [defaultArray, defaultHistory]);


	const handleClick = (index: number) => {
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
			return;
		}
		for (let num of arr2Copy) {
			submitArr.push({ ...defaultItem, value: num });
		}
		dispatch(onNext(submitArr))
	};

	const onStart = () => {
		dispatch(onRestart());
	};

	const onUndoMove = () => {
		dispatch(onUndo());
		setCoords(-1);
	};

	const onSave = () => {
		const arr2save = [...arr];
		if (coords >= 0) arr2save[coords].active = false;
		localStorage.setItem('line-save', JSON.stringify({
			history,
			arr: arr2save,
		}));
	};

	const onLoad = () => {
		const state2loadRaw = localStorage.getItem('line-save');
		if (typeof state2loadRaw != 'undefined') {
			const state2load = JSON.parse(state2loadRaw);
			dispatch(onLoadGame(state2load));
		}
	};

	return (
		<GameLayout>
			<LineLayout>
				<LineField>
					{arr.map((item, index) => (
						<LineButton disabled={item.deleted} active={item.active} onClick={() => handleClick(index)}>
							{item.value}
						</LineButton>
					))}
				</LineField>
				<Button size={'sm'} onClick={onSubmit} floatRight={true}>Дальше</Button>
			</LineLayout>
			<RulesLayout>
				<div>
					<h3>Игровое меню</h3>
					<div>
						<Button onClick={onStart} size={'md'}>
							Начать заново
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
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: rules }} />
			</RulesLayout>
		</GameLayout>
	);
};
