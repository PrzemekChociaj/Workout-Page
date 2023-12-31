import { useState, useRef } from 'react';

interface TimerHook {
	count: number;
	isRunning: boolean;
	toggleTimer: () => void;
	resetTimer: () => void;
}

const useTimer = (): TimerHook => {
	const [count, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const toggleTimer = () => {
		if (isRunning) {
			stopTimer();
		} else {
			startTimer();
		}
	};

	const startTimer = () => {
		if (isRunning) return;

		setIsRunning(true);
		timerRef.current = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);
	};

	const stopTimer = () => {
		if (!isRunning) return;

		setIsRunning(false);
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
	};

	const resetTimer = () => {
		stopTimer();
		setCount(0);
	};

	return { count, isRunning, toggleTimer, resetTimer };
};

export default useTimer;
