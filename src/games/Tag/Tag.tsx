import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';

import styles from './Tag.module.scss';

interface Props {
	className?: string;
	children?: ReactNode;
	value: number;
	move?: 'Up' | 'Down' | 'Left' | 'Right' | '';
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
	row: number;
	col: number;
	active?: boolean;
}

export type Tag = {
	value: number;
	move: 'Up' | 'Down' | 'Left' | 'Right' | '';
	active?: boolean;
};

export type TagArray = Tag[][];

export type Coords = [number, number];

const makeDefaultArray = () => {
	return make2DTagArray(
		makeRandomArray().map(el => {
			return {
				value: el,
				move: '',
			};
		})
	);
};

const makeRandomArray = (limit = 16): Array<number> => {
	const res = new Array(limit);
	for (let i = 0; i < limit; i++) {
		let randomIndex = getRandomInt();
		while (res[randomIndex] != undefined) {
			randomIndex = getRandomInt();
		}
		res[randomIndex] = i;
	}
	return res;
};

const getRandomInt = (limit = 15) => {
	const random = Math.random();
	const part = 1 / limit;
	return Math.round(random / part);
};

const make2DTagArray = (arr: Tag[], lineLimit = 4) => {
	const res = [];
	let i = 0;
	while (i < arr.length) {
		res.push(arr.slice(i, i + lineLimit));
		i += lineLimit;
	}
	return res;
};

const swapChips = (arr: TagArray, from: Coords, to: Coords) => {
	const [rowFrom, colFrom] = from;
	const [rowTo, colTo] = to;
	const newArr = [];
	for (const el of arr) {
		newArr.push([...el]);
	}
	[newArr[rowFrom][colFrom], newArr[rowTo][colTo]] = [newArr[rowTo][colTo], newArr[rowFrom][colFrom]];
	return newArr;
};

export const TagChip: FC<Props> = (props: Props) => {
	const { children, value, move, onClick, row, col, active } = props;
	return (
		<div
			className={classNames(
				styles.chip,
				!value && styles.empty,
				move && styles[`move${move}`],
				active && styles.active
			)}
			onClick={onClick}
			data-row={row}
			data-col={col}
		>
			{value ? children : ''}
		</div>
	);
};

const legitMoves = [
	[1, 0],
	[0, 1],
	[-1, 0],
	[0, -1],
];

// const checkWin

export const Tag: FC = () => {
	const [array, setArray] = useState<TagArray>(makeDefaultArray());

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const { row, col } = e.currentTarget.dataset;
		for (const move of legitMoves) {
			const x = +row + move[0];
			const y = +col + move[1];
			if (x < 4 && x >= 0 && y < 4 && y >= 0 && array[x][y].value === 0) {
				const newArray = swapChips(array, [+row, +col], [x, y]);
				setArray(newArray);
			}
		}
	};

	return (
		<div className={styles['tag-field']}>
			{array.map((subArray, row) =>
				subArray.map((el, col) => (
					<TagChip
						onClick={handleClick}
						value={el.value}
						active={el.active}
						move={el.move}
						row={row}
						col={col}
						key={`tag${el}${col}`}
					>
						{el.value}
					</TagChip>
				))
			)}
		</div>
	);
};
