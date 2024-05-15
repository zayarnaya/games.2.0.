import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './KnightButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children?: ReactNode,
    hint?: boolean,
    needHint?: boolean,
    wrong?: boolean,
    lastChosen?: boolean,
};

export const KnightButton:FC<Props> = (props: Props) => {
    const { children, className, hint, needHint, wrong, lastChosen, ...rest } = props;
    return (
        <button className={classNames(className, needHint && styles['need-hint'], hint && styles.hint, wrong && styles.wrong, lastChosen && styles['last-chosen'], styles['knight-button'])} {...rest}>{children}</button>
    );
}
