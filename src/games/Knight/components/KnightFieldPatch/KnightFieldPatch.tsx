import React, { FC } from 'react';

import styles from './KnightFieldPatch.module.scss';

export const KnightFieldPatch:FC = () => {
    return (
        <div className={styles.patch}>
            <p className={styles['patch__message']}>пауза</p>
        </div>
    );
}
