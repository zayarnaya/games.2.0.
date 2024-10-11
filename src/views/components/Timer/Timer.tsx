import React, { forwardRef, LegacyRef, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Timer.module.scss';
import { makeTimeString, parseTime } from './helpers';
import { useInterval } from '../../../hooks';

type Props = {
	className?: string;
	time?: string;
	pause?: boolean;
	callback?: (time: string) => void;
};

// eslint-disable-next-line react/display-name
export const Timer = forwardRef<HTMLDivElement, Props>((props: Props, ref: LegacyRef<HTMLDivElement>) => {
	const { className, time, pause, callback } = props;
	const [hour, setHour] = useState(0);
	const [min, setMin] = useState(0);
	const [sec, setSec] = useState(0);
	const timerRef = useRef(null);

	const timer = () => {
		if (!pause) {
			setSec(sec + 1);
			if (sec === 59) {
				setSec(0);
				setMin(min + 1);
			}
			if (min === 59) {
				setMin(0);
				setHour(hour + 1);
			}
			if (callback) callback(makeTimeString(hour, min, sec));
		}
	};

	timerRef.current = useInterval(timer, 1000); // ну пока так работает а там надо как-то по уму, без четырех ререндеров

	useEffect(() => {
		if (time) {
			const [hours, mins, secs] = parseTime(time);
			setMin(mins);
			setHour(hours);
			setSec(secs);
		} else {
			setMin(0);
			setHour(0);
			setSec(0);
		}
	}, [time]);

	// с форматированием бы разобраться бы
	return (
		<div data-time={makeTimeString(hour, min, sec)} ref={ref} className={classNames(className, styles.timer)}>
			{hour < 10 && '0'}
			{hour}:{min < 10 && '0'}
			{min}:{sec < 10 && '0'}
			{sec}
		</div>
	);
});
