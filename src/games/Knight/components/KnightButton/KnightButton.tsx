import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './KnightButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children?: ReactNode,
    hint?: boolean,
    wrong?: boolean,
    lastChosen?: boolean,
};

export const KnightButton:FC<Props> = (props: Props) => {
    const { children, className, hint, wrong, lastChosen, ...rest } = props;
    return (
        <button className={classNames(className, hint && styles.hint, wrong && styles.wrong, lastChosen && styles['last-chosen'], styles['knight-button'])} {...rest}>{children}</button>
    );
}
