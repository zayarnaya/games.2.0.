import React, { FC, useState } from 'react';

import styles from './Header.module.scss';

export const Header:FC = () => {
	// @ts-ignore 
	const [heading, setHeading] = useState('Добро пожаловать в игры');

	return <div className={styles.header}><h1>{heading}</h1></div>;
};
