import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';

import styles from './Tag.module.scss';

interface Props {
    className?: string,
    children?: ReactNode,
    value: number,
    active?: boolean,
    move?: 'Up' | 'Down' | 'Left' | 'Right' | '',
    onClick: () => void,
    row: number,
    col: number,
};

export type Tag = {
    value: number,
    active: boolean,
    move: 'Up' | 'Down' | 'Left' | 'Right' | '',
}

export type TagArray = Tag[][];

export type Coords = [number, number];

const makeDefaultArray = () => {
    return make2DTagArray(makeRandomArray().map(el => {
        return {
            value: el, 
            active: false,
            move: '',
        }
    }));
}

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
}

const getRandomInt = (limit = 15) => {
    let random = Math.random();
    const part = 1 / limit;
    return Math.round(random / part);
}

const make2DTagArray = (arr: Tag[], lineLimit = 4) => {
    const res = [];
    let i = 0;
    while (i < arr.length) {
        res.push(arr.slice(i, i + lineLimit));
        i += lineLimit;
    }
    return res;
}

const swapChips = (arr: TagArray, from: Coords, to: Coords) => {
    const [rowFrom, colFrom] = from;
    const [rowTo, colTo] = to;
    const newArr = [];
    for (let el of arr) {
        newArr.push([...el]);
    }
    [newArr[rowFrom][colFrom], newArr[rowTo][colTo]] = [newArr[rowTo][colTo], newArr[rowFrom][colFrom]];
    return newArr;
}

export const TagChip:FC<Props> = (props: Props) => {
    const { children, className, value, active = false, move, onClick, row, col } = props;
    return (
        <div className={classNames(styles.chip, !value && styles.empty, active && styles.active, move && styles[`move${move}`])} onClick={onClick} data-row={row} data-col={col}>{value ? children : ''}</div>
    );
}

const legitMoves = [
    '1,0',
    '0,1',
    '-1,0',
    '0,-1'
];

const checkLegit = (arr, from, to) => {
    console.log(from, to);
    const diff = [to[0] - from[0], to[1] - from[1]];
    if (legitMoves.includes(diff.join(',')) && !arr[to[0]][to[1]].value) {
        return true;
    }
    return false;
}

// const checkWin

export const Tag:FC = () => {
    const [array, setArray] = useState<TagArray>(makeDefaultArray());
    const [activeChip, setActiveChip] = useState([]);

    const handleClick = (e) => {
        const {row, col} = e.target.dataset;
        let newArr = [];
        for (let el of array) {
            newArr.push([...el]);
        }
        if (!activeChip.length) {
            setActiveChip([row, col]);
            newArr[row][col].active = true;
        } else if (activeChip[0] === row && activeChip[1] === col) {
            setActiveChip([]);
            newArr[row][col].active = false;
        } else {
            if (checkLegit(array, activeChip, [row, col])) {
                newArr = swapChips(newArr, activeChip, [row, col]);
                setActiveChip([]);
                newArr[row][col].active = false;
            } else {
                console.log('NO');
            }
        }
        setArray(newArr);
    }

    return (
        <div className={styles['tag-field']}>
            {array.map((subArray, row) => subArray.map((el, col) => <TagChip onClick={handleClick} value={el.value} active={el.active} move={el.move} row={row} col={col}>{el.value}</TagChip>))}
        </div>
    );
}
