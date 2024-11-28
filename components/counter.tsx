import React, { useCallback, useEffect, useState, createRef } from "react";
import { DateTime, Duration } from 'luxon'

export default function Counter({ startTime = '2015-02-01T08:00:00-05:00' }) {
    const [text, setText] = useState('');

    const element: React.RefObject<HTMLSpanElement> = createRef();

    const displayText = (): string => {
        const now = DateTime.now();
        const start = DateTime.fromISO(startTime);

        let string = '';

        const units: (keyof Duration)[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
        let remainingDuration = now.diff(start, units as any);

        units.forEach((unit, i) => {
            let duration = remainingDuration[unit];
            if (i === units.length - 1) {
                duration = `0${Math.ceil(duration as any)}`;
                string += ` and ${duration.substring(duration.length - 2)} ${unit}`;
            } else {
                string += `${duration} ${unit}, `;
            }
        });

        return string;
    };

    const displayTextCallback = useCallback(displayText, [startTime]);

    useEffect(() => {
        if (!text) {
            setText(displayTextCallback());
        }
        setInterval(() => {
            setText(displayTextCallback())
        }, 1000);
    }, [text, element, displayTextCallback]);

    const style: any = {
        display: 'inline-block',
        width: 'auto'
    };

    return (
        <span ref={element} style={style}>
            {text}
        </span>
    );
}