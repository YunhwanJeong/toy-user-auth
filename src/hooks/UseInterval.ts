import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        if (!delay && delay !== 0) {
            return;
        }

        const tick = () => {
            savedCallback.current();
        };

        const id = setInterval(tick, delay);

        return () => clearInterval(id);
    }, [delay]);
};
