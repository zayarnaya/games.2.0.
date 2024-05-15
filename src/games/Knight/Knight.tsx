import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIndexFromRowAndCol, getRowAndCol } from './helpers';
import rules from './rules.html';
import { GameLayout } from '../../views/layouts/GameLayout/GameLayout';
import { KnightButton } from './components/KnightButton/KnightButton';
import { KnightField } from './components/KnightField/KnightField';
import { RulesLayout } from '../../views/layouts/RulesLayout/RulesLayout';
import { Button } from '../../views/components/Button/Button';
import { Timer } from '../../views/components/Timer/Timer';
import { Score } from './components/Score/Score';
import { HighScore } from './components/HighScore/HighScore';
import { KnightFieldPatch } from './components/KnightFieldPatch/KnightFieldPatch';
import type { RootState } from '../../store/store';
import { onNextMove, setWrongMove, removeWrongMove, onUndoMove, restart, onLoadGame, startTimer } from '../../store/slices/KnightSlice';

// todo проверить вин и фейл
export const Knight = () => {
	const { count, field, history, win, fail, time} = useSelector((state: RootState) => state.knight);
	const [coords, setCoords] = useState([]);
	const [needHint, setNeedHint] = useState(false);
	const timerRef = useRef<HTMLDivElement>(null);
	const [pause, setPause] = useState(false);


	const dispatch = useDispatch();

	const highscore = localStorage.getItem('knight-highscore') || 0;
	const bestTime = localStorage.getItem('knight-besttime') || '00:00:00';

	useEffect(() => {
		if (win) onWin();
	}, [win]);
	useEffect(() => {
		if (fail) onFail();
	}, [fail]);

	const handleClick = (index: number) => {
		if (!coords.length) {
			dispatch(startTimer());
		}
		const { row, col } = getRowAndCol(index);
		if (field[row][col].hint === true || !coords.length) {
			dispatch(onNextMove({coords, coords2: [row, col]}));
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
		alert('Вы проиграли!' + 'Ваш счет: ' + (count));
		if (count > +highscore) {
			localStorage.setItem('knight-highscore', (count).toString());
		}
	}

	const onWin = () => {
		const winTime = timerRef?.current?.dataset?.time || '00:00:00';
		alert('Вы выиграли! Ваше время ' + timerRef.current.dataset.time);
		if (winTime.localeCompare(bestTime) > 0) {
			localStorage.setItem('knight-besttime', winTime);
		}
	}

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
			const {coords} = parsedData;
			setCoords(coords);
			dispatch(onLoadGame(parsedData));
		}
	};

	const onRestart = () => {
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
	}

	const onPauseClick = () => {
		setPause(!pause);
	}

	const onDeleteHighscore = () => {
		localStorage.setItem('knight-highscore', '0');
	}

	return (
		<GameLayout>
			<KnightField>
				{pause && <KnightFieldPatch />}
				{field.flat().map((item, index) => {
					return (
						<KnightButton
							hint={needHint && item.hint}
							needHint={needHint}
							onClick={() => handleClick(index)}
							disabled={item.value != 0}
							wrong={item.wrong}
							lastChosen={getIndexFromRowAndCol(coords[0], coords[1]) === index}
						>
							{item.value === 0 ? '' : item.value}
						</KnightButton>
					);
				})}
			</KnightField>
			<RulesLayout>
				<Timer ref={timerRef} time={time} pause={pause}/>
				<Score>{count}</Score>
				<HighScore />
				<div>
					<h3>Игровое меню</h3>
					<div>
						<Button size={'md'} onClick={onNeedHint}>{needHint ? 'Выключить подсказку' : 'Включить подсказку'}</Button>
						<Button size={'md'} onClick={onSave}>Сохранить</Button>
						<Button size={'md'} onClick={onLoad}>Загрузить</Button>
						<Button size={'md'} onClick={onRestart}>Начать сначала</Button>
						<Button size={'md'} onClick={onUndo} disabled={!history.length}>
							Отменить ход
						</Button>
						<Button size={'md'} onClick={onDeleteHighscore}>Сбросить рекорд</Button>
						<Button size='sm' onClick={onPauseClick}>Пауза</Button>
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
