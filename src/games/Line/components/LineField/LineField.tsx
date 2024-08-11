import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from  './LineField.module.scss';

type Props = {
    className?: string,
    children?: ReactNode,
};

export const LineField:FC<Props> = (props: Props) => {
    const { children, className, ...rest } = props;
    return (
        <div className={classNames(className, styles['line-field'])} {...rest}>{children}</div>
    );
}

export default name
