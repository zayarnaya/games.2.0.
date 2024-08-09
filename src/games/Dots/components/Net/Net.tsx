import React, { FC, memo } from 'react';
import classNames from 'classnames';

import styles from './Net.module.scss';

interface Props{
    width: number,
    height: number,
    step: number,
};

const Net:FC<Props> = (props: Props) => {
    const { width, height, step } = props;
    const matrix = new Array(width).fill(new Array(height).fill(1));
    let index = 0;
    return (
        <>{matrix.map((el, i) => 
            el.map((_, k) => 
                <rect data-index={index++} x={i * step} y={k * step} width={step} height={step} stroke="grey" fill="transparent" strokeWidth=".5" key={`net_${i}_${k}`}/>
            )
            )}</>
    );
}

export default memo(Net);
