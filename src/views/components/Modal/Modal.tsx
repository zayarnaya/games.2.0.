import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';

interface Props {
    className?: string,
    children?: ReactNode,
    onClose: () => void,
};

export const Modal:FC<Props> = (props: Props) => {
    const { children, className, onClose } = props;

    return (
        <>{createPortal(
            <div className={classNames(className, styles['modal__blackout'])} onClick={onClose}>
                <div className={classNames(className, styles['modal__container'])}>
                    <div className={classNames(className, styles['modal__close-button'])} onClick={onClose}></div>
                    {children}
                </div>
            </div>
            ,
            document.body
        )}</>
    );
}
