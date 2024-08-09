import React, { FC, memo, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Dot.module.scss';

interface Props {
    index: number,
    row: number,
    col: number, 
    step: number,
    fill: string,
    onClick: (e: any) => void,
};

const Dot:FC<Props> = (props: Props) => {
    const { index, row, col, step, fill, onClick } = props;
    return (
        <circle data-index={index} data-row={row} data-col={col} className={styles.circle} r="1" cx={row * step} cy={col * step} stroke="transparent" fill={fill} onClick={onClick}/>
    );
}

export default memo(Dot);
