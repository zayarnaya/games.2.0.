import React, { FC, forwardRef, LegacyRef, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Timer.module.scss';
import { getTime, parseTime } from './helpers';

type Props = {
    className?: string,
    time?: string,
    pause?: boolean,
};

export const Timer:FC<Props> = forwardRef<HTMLDivElement, Props>((props: Props, ref: LegacyRef<HTMLDivElement>) => {
    const { className, time, pause } = props;

    const timer = useMemo(() => {
        if (time) {
            const [hours, mins, secs] = parseTime(time);
            return {hours, mins, secs};
        }
        return null;
    }, [time]);

    const [hour, setHour] = useState(timer?.hours || 0);
    const [min, setMin] = useState(timer?.mins || 0);
    const [sec, setSec] = useState(timer?.secs || 0);
    const timerRef = useRef(null);

    const start = Date.now();

    timerRef.current = setTimeout(() => {
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
        }

    }, 1000); // ну пока так работает а там надо как-то по уму, без четырех ререндеров

    
    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
        }
    }, []);


    // с форматированием бы разобраться бы
    return (
        <div data-time={`${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`} ref={ref} className={classNames(className, styles.timer)}>{hour < 10 && '0'}{hour}:{min < 10 && '0'}{min}:{sec < 10 && '0'}{sec}</div>
    );
})
