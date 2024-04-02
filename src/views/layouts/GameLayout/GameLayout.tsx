import React from "react";
import styles from './GameLayout.module.scss';

export const GameLayout = ({children}) => {
    return (
        <div className={styles['game-layout']}>{children}</div>
    )
}
