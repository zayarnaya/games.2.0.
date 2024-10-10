// @ts-nocheck
import React, { FC, HTMLAttributes, useState } from 'react';
import { NavItem } from '../NavItem/NavItem';
import styles from './Sidebar.module.scss';

interface Props extends HTMLAttributes<HTMLElement> {
	links: {name: string, href: string}[],
}

export const Sidebar: FC<Props> = (props: Props) => {
	const {links} = props;
	const [items, setItems] = useState(links);
	return (
		<aside className={styles.sidebar}>
			<ul className='nav-list'>
				{items.map((item, index) => (
					<NavItem active={item.active} name={item.name} href={item.href} key={index} />
				))}
			</ul>
		</aside>
	);
};
