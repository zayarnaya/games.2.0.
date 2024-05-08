import React, { useRef, useState } from 'react';
import { getDefaultField, getRowAndCol, isEqualDiff } from './helpers';
import { legitMoves } from './consts';
import rules from './rules.html';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import styles from './Knight.module.scss';
import { KnightButton } from './components/KnightButton/KnightButton';
import { KnightField } from './components/KnightField/KnightField';
import { RulesLayout } from '../../views/layouts/RulesLayout/RulesLayout';
import { Button } from '../../views/components/Button/Button';
import { Timer } from '../../views/components/Timer/Timer';
import { Score } from './components/Score/Score';
import { HighScore } from './components/HighScore/HighScore';

export const Knight = () => {
	const defaultField = getDefaultField();
	const [count, setCount] = useState(1);
	const [field, setField] = useState(defaultField);
	const [coords, setCoords] = useState([]);
	const [needHint, setNeedHint] = useState(false);
	const [history, setHistory] = useState([]);
	const timerRef = useRef(null);
	const [timer, setTimer] = useState('');

	const highscore = localStorage.getItem('knight-highscore') || 0;

	// console.log(field);
	// console.log(history);

	const checkLegit = (row: number, col: number) => {
		if (!coords.length) return true;
		const diff = [coords[0] - row, coords[1] - col] as [number, number];
		for (let move of legitMoves) {
			if (isEqualDiff(move, diff)) return true;
		}
		return false;
	};

	const handleClick = (index: number) => {
		const { row, col } = getRowAndCol(index);
		if (checkLegit(row, col)) {
			if (needHint && coords.length) {
				removeHint(coords as [number, number]);
			}
			const oldHistory = [...history];
			oldHistory.push({
				coords,
				count,
				field: [...field],
			});
			setHistory(oldHistory);
			setCoords([row, col]);
			setCount(count + 1);
			const newField = [...field];
			newField[row][col] = { ...newField[row][col], value: count };
			setField(newField);
			if (count === 100) alert('Ура! Победа!');
			if (needHint) setHint([row, col]);
		}
	};

	const onNeedHint = () => {
		setNeedHint(!needHint);
	};

	const removeHint = (coords: [number, number]) => {
		const [row, col] = coords;
		const newField = [...field];
		for (let move of legitMoves) {
			if (newField[row + move[0]] && newField[row + move[0]][col + move[1]]) {
				newField[row + move[0]][col + move[1]] = { ...newField[row + move[0]][col + move[1]], hint: false };
			}
		}
		setField(newField);
	};

	const onFail = () => {
		alert('Вы проиграли!' + 'Ваш счет: ' + (count - 1));
		if (count - 1 > +highscore) {
			localStorage.setItem('knight-highscore', (count - 1).toString());
		}
		setCount(count - 1);
	}

	const setHint = (coords: [number, number]) => {
		const [row, col] = coords;
		const newField = [...field];
		let count = 0;
		for (let move of legitMoves) {
			if (
				newField[row + move[0]] &&
				newField[row + move[0]][col + move[1]] &&
				!newField[row + move[0]][col + move[1]].value
			) {
				count++;
				newField[row + move[0]][col + move[1]] = { ...newField[row + move[0]][col + move[1]], hint: true };
			}
		}
		if (!count) onFail();
		setField(newField);
	};

	const onSave = () => {
		const data2save = {
			coords,
			count,
			field,
			timer: getTime(),
		};
		console.log(data2save);
		localStorage.setItem('knight-save', JSON.stringify(data2save));
	};

	const onLoad = () => {
		const rawData = localStorage.getItem('knight-save');
		if (rawData) {
			const { coords, count, field, timer } = JSON.parse(rawData);
			setCoords(coords);
			setCount(count);
			setField(field);
			setTimer(timer);
		}
	};

	const onRestart = () => {
		setField(defaultField);
		setCoords([]);
		setCount(1);
	};

	const onCancel = () => {
		const oldHistory = [...history];
		const { count, coords, field } = oldHistory.pop();
		setCoords(coords);
		setCount(count);
		setField([...field]);
		setHistory(oldHistory);
	};

	const getTime = () => {
		if (timerRef.current) {
			return timerRef.current.dataset.time;
		}
		return null;
	}

	return (
		<GameLayout>
			<KnightField>
				{field.flat().map((item, index) => {
					return (
						<KnightButton
							// className={needHint && item.hint ? 'green' : ''}
							hint={needHint && item.hint}
							onClick={() => handleClick(index)}
							disabled={item.value != 0}
						>
							{item.value === 0 ? '' : item.value}
						</KnightButton>
					);
				})}
			</KnightField>
			<RulesLayout>
				<Timer ref={timerRef} time={timer}/>
				<Score>{count - 1}</Score>
				<HighScore />
				<div>
					<h3>Игровое меню</h3>
					<div>
						<Button size={'md'} onClick={onNeedHint}>{needHint ? 'Выключить подсказку' : 'Включить подсказку'}</Button>
						<Button size={'md'} onClick={onSave}>Сохранить</Button>
						<Button size={'md'} onClick={onLoad}>Загрузить</Button>
						<Button size={'md'} onClick={onRestart}>Начать сначала</Button>
						<Button size={'md'} onClick={onCancel} disabled={!history.length}>
							Отменить ход
						</Button>
						<Button size='sm' onClick={getTime}>Таймер</Button>
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
