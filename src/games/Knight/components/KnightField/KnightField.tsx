import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './KnightField.module.scss';

type Props = {
    className?: string,
    children?: ReactNode,
};

export const KnightField:FC<Props> = (props: Props) => {
    const { children, className } = props;
    return (
        <div className={classNames(className, styles['knight-field'])}>{children}</div>
    );
}
