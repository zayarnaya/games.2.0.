import React, { useState } from 'react';

import styles from './Header.module.scss';

export const Header = () => {
	const [heading, setHeading] = useState('Добро пожаловать в игры');

	return <div className={styles.header}>{heading}</div>;
};
