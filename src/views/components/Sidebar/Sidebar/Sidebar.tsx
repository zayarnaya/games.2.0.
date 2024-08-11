// @ts-nocheck
import React, { FC, useState } from 'react';
import { NavItem } from '../NavItem/NavItem';
import styles from './Sidebar.module.scss';
// @ts-ignore 
export const Sidebar: FC = ({ links }) => {
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
