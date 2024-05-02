import React, { useState } from 'react';
import { LineItem } from './types';
import { checkHorizontal, checkVertical, getDefaultArray } from './helpers';
import { defaultItem } from './consts';
import rules from './rules.html';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import { Button } from '../../views/components/Button/Button';

export const Line = () => {
	console.log(rules);
	const defaultArray = getDefaultArray();

	const [coords, setCoords] = useState(-1);
	const [arr, setArr] = useState<LineItem[]>(defaultArray);
	const [history, setHistory] = useState([
		{
			arr: defaultArray,
		},
	]);

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
				const old = [...history];
				const arr4history = arr.slice().map(item => {
					return item.active ? { ...item, active: false } : item;
				});
				old.push({
					arr: arr4history,
				});
				setHistory(old);
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
		const arr2Copy = submitArr.filter(item => !item.deleted).map(item => item.value);
		if (!arr2Copy.length) {
			alert('Ура, победа!');
			return;
		}
		for (let num of arr2Copy) {
			submitArr.push({ ...defaultItem, value: num });
		}
		setArr(submitArr);
	};

	const onStart = () => {
		setCoords(-1);
		setArr(defaultArray);
	};

	const onCancel = () => {
		const oldHistory = [...history];
		const { arr } = oldHistory.pop();
		setCoords(-1);
		setArr(arr);
		setHistory(oldHistory);
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
			<div>
				<div className='field__line'>
					{arr.map((item, index) => (
						<button disabled={item.deleted} className={item.active ? 'red' : ''} onClick={() => handleClick(index)}>
							{item.value}
						</button>
					))}
				</div>
				<button onClick={onSubmit}>Дальше</button>
			</div>
			<div>
				<div>
					<h3>Игровое меню</h3>
					<div>
						<Button onClick={onStart} spec='restart'>
							Начать заново
						</Button>
						<Button disabled={history.length === 1} onClick={onCancel} spec='undo'>
							Отменить ход
						</Button>
						<Button onClick={onSave} spec='save'>
							Сохранить
						</Button>
						<Button onClick={onLoad} spec='load'>
							Загрузить
						</Button>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: rules }} />
			</div>
		</GameLayout>
	);
};
