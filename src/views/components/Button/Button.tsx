import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	spec?: 'save' | 'load' | 'restart' | 'undo';
}

export const Button: FC<Props> = ({ children, className, spec, ...rest }) => {
	return (
		<button className={classNames(styles.button, spec && styles[`button__${spec}`])} {...rest}>
			{children}
		</button>
	);
};
