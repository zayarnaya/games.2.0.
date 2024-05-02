import React, { useEffect, useState, ReactNode, FC } from 'react';
import styles from './GameLayout.module.scss';
import { headings } from './consts';

type Props = {
	children: ReactNode[];
};

export const GameLayout: FC<Props> = ({ children }) => {
	const [heading, setHeading] = useState('');
	useEffect(() => {
		const { pathname } = window.location;
		setHeading(headings[pathname]);
	});
	return (
		<div className={styles['game-layout']}>
			<h2 className={styles['game-heading']}>{heading}</h2>
			{children}
		</div>
	);
};
