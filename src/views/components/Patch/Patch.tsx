import React, { FC } from 'react';

import styles from './Patch.module.scss';
import classNames from 'classnames';

type Props = {
    game: 'knight' | 'line' | 'tetris',
}

export const Patch:FC<Props> = (props: Props) => {
    const {game} = props;
    return (
        <div className={classNames(styles.patch, styles[`patch_${game}`])}>
            <p className={styles['patch__message']}>пауза</p>
        </div>
    );
}
