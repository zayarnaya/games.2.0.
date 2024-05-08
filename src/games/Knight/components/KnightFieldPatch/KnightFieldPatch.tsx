import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './KnightFieldPatch.module.scss';

interface Props {
    className?: string,
    children?: ReactNode,
};

export const KnightFieldPatch:FC<Props> = (props: Props) => {
    const { children, className } = props;
    return (
        <div className={styles.patch}>
            <p className={styles['patch__message']}>пауза</p>
        </div>
    );
}
