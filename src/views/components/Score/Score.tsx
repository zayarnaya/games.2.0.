import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Score.module.scss';

type Props = {
    className?: string,
    children?: ReactNode,
};

export const Score:FC<Props> = (props: Props) => {
    const { children, className } = props;
    return (
        <div className={classNames(className, styles.score)}>Текущий счет: {children}</div>
    );
}
