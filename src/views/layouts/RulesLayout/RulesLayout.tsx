import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './RulesLayout.module.scss';

type Props = {
    className?: string,
    children?: ReactNode,
};

export const RulesLayout:FC<Props> = (props: Props) => {
    const { children, className } = props;
    return (
        <div className={classNames(className, styles['rules-layout'])}>{children}</div>
    );
}
