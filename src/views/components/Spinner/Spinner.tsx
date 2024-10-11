import React, { FC } from 'react';

import styles from './Spinner.module.scss';

export const Spinner:FC = () => {
	return (
		<div className={styles.white} aria-hidden>
			<div className={styles.spinner}>
				<span className={styles.dot}>
					<i className={styles.item} />
					<i className={styles.item} />
					<i className={styles.item} />
					<i className={styles.item} />
				</span>
			</div>
		</div>

	);
};
