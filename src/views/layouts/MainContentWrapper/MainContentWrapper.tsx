import React, { FC, ReactNode } from "react";
import styles from './MainContentWrapper.module.scss';

type Props = {
    children: ReactNode[];
}

export const MainContentWrapper: FC<Props> = ({children}) => {
    return (
        <main className={styles['main-content-wrapper']}>{children}</main>
    )
}
