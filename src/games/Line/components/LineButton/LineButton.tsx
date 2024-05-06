import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './LineButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
	className?: string;
    active?: boolean;
};

export const LineButton:FC<Props> = (props: Props) => {
    const { children, className, active = false, ...rest } = props;
    return (
        <button className={classNames(className, styles['line-button'], active && styles.active)} {...rest}>{children}</button>
    );
}
