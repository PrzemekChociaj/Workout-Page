const ButtonClassName = (isRunning: boolean): string => {
	return isRunning
		? 'bg-red-500 hover:bg-red-700'
		: 'bg-blue-500 hover:bg-blue-700';
};

const TimerButton: React.FunctionComponent<{
	isRunning: boolean;
	toggleTimer: () => void;
}> = ({ isRunning, toggleTimer }) => {
	const buttonClassName: string = ButtonClassName(isRunning);

	return (
		<button
			className={`${buttonClassName} text-white font-bold py-2 px-4 rounded mr-2`}
			onClick={toggleTimer}>
			{isRunning ? 'Stop' : 'Start'}
		</button>
	);
};

export default TimerButton;
