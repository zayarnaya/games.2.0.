import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './LineLayout.module.scss';

type Props = {
    className?: string,
    children?: ReactNode,
};

export const LineLayout:FC<Props> = (props: Props) => {
    const { children, className } = props;
    return (
        <div className={classNames(className, styles['line-layout'])}>{children}</div>
    );
}
