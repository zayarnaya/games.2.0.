import React, { FC, ReactNode, useCallback, useState } from 'react';
import classNames from 'classnames';

import styles from './Dots.module.scss';
import { defaults, legitMoves } from './consts';
import { getPolygonArea } from './helpers';
import Net from './components/Net/Net';
import Dot from './components/Dot/Dot';

interface Props {
    className?: string,
    children?: ReactNode,
};

interface DotElement {
    color: string,
    path: number,
}

export const Dots:FC<Props> = (props: Props) => {
    const { children, className } = props;
    const { cellWidth, fieldWidth, fieldHeight, step, defaultColor } = defaults;
    

    const [array, setArray] = useState(new Array(fieldWidth).fill(new Array(fieldHeight).fill(defaultColor)));
    const [polygons, setPolygons] = useState([
        [
            '2|0', '1|1', '2|2', '1|3', '1|4', '1|5', '0|5',
            '0|6', '1|6', '1|7', '2|7', '3|7', '4|7', '5|6',
            '5|5', '4|4', '4|3', '5|2', '4|2', '3|1', 
        ]
    ]);
    const [path, setPath] = useState('');
    const [isPolygon, setIsPolygon] = useState(false);

    const addToPath = (path: string, col: number|string, row: number|string) => {
        let newPath = path ? path + ` L ${+col * step} ${+row * step}` : `M ${+col * step} ${+row * step}`;
        setPath(newPath);
        console.log(newPath);
    }

    const handleClick = useCallback((e) => {
        console.log(e.target.dataset.row, e.target.dataset.col);
        const row = +e.target.dataset.row;
        const col = +e.target.dataset.col;
        let next = 0;
        for (let move of legitMoves) {
            const [x, y] = move;
            console.log(row + x, col + y);
            if (array[row + x] && array[row + x][col + y] && array[row + x][col + y] === 'green') {
                next++;
            }
        }
        const newArray = [...array];
        const newRow = [...newArray[row]];
        newRow[col] = 'green';
        newArray[row] = newRow;
        setArray(newArray);
        getPolygonArea(polygons[0]);
        addToPath(path, row, col);

        // for (let poly of polygons) {
        //     if ()
        // }
    }, [array]);
    let index = 0;

    // <rect x={i * 10} y={10} width="10" height="10" stroke="grey" fill="transparent" stroke-width="1"/>
    return (
        <svg width={cellWidth * fieldWidth} height={cellWidth * fieldHeight} viewBox={`0 0 ${step * fieldWidth} ${step * fieldHeight}`}>
            <path d={path} fill={isPolygon ? "green" : "transparent"} stroke="green" />
            <Net width={fieldHeight} height={fieldHeight} step={step} />

            {array.map((el, i) => 
                el.map((_, k) => 
                    <Dot key={`circle_${i}_${k}`} index={index++} row={i} col={k} step={step} fill={array[i][k]} onClick={handleClick} />
                )
                )}
        </svg>
    );
}
