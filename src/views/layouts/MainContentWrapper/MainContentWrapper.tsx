import React from "react";
import styles from './MainContentWrapper.module.scss';

export const MainContentWrapper = ({children}) => {
    return (
        <main className={styles['main-content-wrapper']}>{children}</main>
    )
}
