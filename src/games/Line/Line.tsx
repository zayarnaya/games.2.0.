import React, { useState } from 'react';
import { LineItem } from './types';
import { checkHorizontal, checkVertical, getDefaultArray } from './helpers';
import { defaultItem } from './consts';
import rules from './rules.html';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import { Button } from '../../views/components/Button/Button';
import { LineButton } from './components/LineButton/LineButton';
import { LineField } from './components/LineField/LineField';
import { LineLayout } from './layouts/LineLayout/LineLayout';
import { RulesLayout } from '../../views/layouts/RulesLayout/RulesLayout';

export const Line = () => {
	const defaultArray = getDefaultArray();

	const [coords, setCoords] = useState(-1);
	const [arr, setArr] = useState<LineItem[]>(defaultArray);
	const [history, setHistory] = useState([]);

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
				const oldBrief = [...history];
				oldBrief.push([index, coords]);
				setHistory(oldBrief);
				const newArr = [...arr];
				newArr[index] = { ...newArr[index], deleted: true, active: false };
				newArr[coords] = { ...newArr[coords], deleted: true, active: false };

				setArr(newArr);
				setCoords(-1);
			}
		}
	};
	const onSubmit = () => {
		const submitArr = [...arr];
		const oldBrief = [...history];
		oldBrief.push(['submit', [...submitArr]]);
		const arr2Copy = submitArr.filter(item => !item.deleted).map(item => item.value);
		if (!arr2Copy.length) {
			alert('Ура, победа!');
			return;
		}
		for (let num of arr2Copy) {
			submitArr.push({ ...defaultItem, value: num });
		}
		setArr(submitArr);
		setHistory(oldBrief);
	};

	const onStart = () => {
		setCoords(-1);
		setArr(defaultArray);
	};

	const onCancel = () => {
		const oldBrief = [...history];
		const [index, coords] = oldBrief.pop();
		if (index === 'submit') {
			setArr(coords);
		} else {
			const oldArr = [...arr];
			oldArr[index].deleted = false;
			oldArr[coords].deleted = false;
			setArr(oldArr);
		}
		setHistory(oldBrief);
	
	};

	const onSave = () => {
		const arr2save = [...arr];
		if (coords >= 0) arr2save[coords].active = false;
		localStorage.setItem('line-save', JSON.stringify(arr2save));
	};

	const onLoad = () => {
		const arr2loadRaw = localStorage.getItem('line-save');
		if (typeof arr2loadRaw != 'undefined') {
			const arr2load = JSON.parse(arr2loadRaw);
			setArr(arr2load);
			setHistory([
				{
					arr: arr2load,
				},
			]);
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
						<Button size={'md'} disabled={history.length === 0} onClick={onCancel}>
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
