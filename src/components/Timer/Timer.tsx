import TimerButton from '../Features/TimerButton';
import { formatTime } from '../Features/Formater';
import useTimer from '../Features/UseTimer';

const Timer: React.FunctionComponent = () => {
	const { count, isRunning, toggleTimer, resetTimer } = useTimer();

	return (
		<div className='flex absolute top-0 mt-6 mr-48 flex-col items-center'>
			<div className='text-4xl font-bold mb-4'>{formatTime(count)}</div>
			<div className='flex'>
				<TimerButton
					isRunning={isRunning}
					toggleTimer={toggleTimer}
					resetTimer={resetTimer}
				/>
			</div>
		</div>
	);
};

export default Timer;
