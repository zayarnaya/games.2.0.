import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	spec?: 'save' | 'load' | 'restart' | 'undo';
	size?: 'sm' | 'md';
	floatRight?: boolean;
}

export const Button: FC<Props> = ({ children, spec, size, floatRight, ...rest }) => {
	return (
		<button
			className={classNames(
				styles.button,
				spec && styles[`button__${spec}`],
				size && styles[`button_${size}`],
				floatRight && styles.right
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
