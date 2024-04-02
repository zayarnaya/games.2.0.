import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {
    active?: boolean;
    name: string;
    onclick?: (e: any) => void;
    href?: string;
    className?: string;
}

export const NavItem: FC<Props> = ({
    active = false,
    name,
    onclick,
    href,
    className
  }) => {
    return (
      <li className={classNames(className, styles['nav-list__item'], active && styles.active)} >
        {href && <NavLink to={href} onClick={onclick}>{name}</NavLink>}
        {!href && <span onClick={onclick}>{name}</span>}
      </li>
    )
  
  }
