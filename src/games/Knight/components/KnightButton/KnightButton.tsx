import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './KnightButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children?: ReactNode,
};

export const KnightButton:FC<Props> = (props: Props) => {
    const { children, className, ...rest } = props;
    return (
        <button className={classNames(className, styles['knight-button'])} {...rest}>{children}</button>
    );
}
