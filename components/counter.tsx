import React, { useCallback, useEffect, useState, createRef } from "react";
import moment from 'moment';

export default function Counter({ startTime = '2015/05/01 08:00:00 EDT' }) {
    const [text, setText] = useState('');
    const [width, setWidth] = useState('auto');

    const element: React.RefObject<HTMLSpanElement> = createRef();

    const displayText = (): string => {
        const now = moment();
        const start = moment(startTime);

        let string = '';

        const units: moment.unitOfTime.Diff[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
        units.forEach((unit, i) => {
            let duration: string | number = now.diff(start, unit);
            start.add(duration, unit);
            if ('seconds' === unit) {
                duration = `0${duration}`;
                duration = duration.substring(duration.length - 2);
            }
            if (i === units.length - 1) {
                string += `and ${duration} ${unit}`;
            } else {
                string += `${duration} ${unit}, `
            }
        });

        return string;
    };

    const displayTextCallback = useCallback(displayText, [startTime]);

    useEffect(() => {
        if (!text) {
            setText(displayTextCallback());
        }
        // setTimeout(() => {
        //     if (text && 'auto' === width) {
        //         let px = element.current?.offsetWidth;
        //         setWidth(`${px}px`);
        //     }
        // });
        setInterval(() => {
            setText(displayTextCallback())
        }, 1000);
    }, [text, element, width, displayTextCallback]);

    const style: any = {
        display: 'inline-block',
        width
    };

    return (
        <span ref={element} style={style}>
            {text}
        </span>
    );
}