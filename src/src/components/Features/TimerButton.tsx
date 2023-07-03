const TimerButton = ({ setIsRunning, isRunning }) => {
	const toggleTimer = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
	};
	return (
		<button
			className={`px-4 py-2 rounded-md ${
				isRunning ? 'bg-red-500' : 'bg-green-500'
			} text-white`}
			onClick={toggleTimer}>
			{isRunning ? 'Stop' : 'Start'}
		</button>
	);
};

export default TimerButton;
