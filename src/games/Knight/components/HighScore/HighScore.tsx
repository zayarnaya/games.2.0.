import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './HighScore.module.scss';

type Props = {
    className?: string,
    children?: ReactNode,
};

export const HighScore:FC<Props> = (props: Props) => {
    const { children, className } = props;
    const highscore = localStorage.getItem('knight-highscore') || '0';
    return (
        <div className={classNames(className, styles.highscore)}>Рекорд: {highscore}</div>
    );
}
