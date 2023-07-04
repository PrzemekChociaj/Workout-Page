import React, { useState, useRef } from 'react';
import TimerButton from '../Features/TimerButton';
import { formatTime } from '../Features/Formater';

const Timer: React.FunctionComponent = () => {
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



	return (
		<div className='flex flex-col items-center'>
			<div className='text-4xl font-bold mb-4'>{formatTime(count)}</div>
			<div className='flex'>
				<TimerButton isRunning={isRunning} toggleTimer={toggleTimer} />
			</div>
		</div>
	);
};

export default Timer;
