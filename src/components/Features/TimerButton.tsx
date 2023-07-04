const TimerButton = ({ isRunning, toggleTimer }) => {
	return (
		<button
			className={`${
				isRunning
					? 'bg-red-500 hover:bg-red-700'
					: 'bg-blue-500 hover:bg-blue-700'
			} text-white font-bold py-2 px-4 rounded mr-2`}
			onClick={toggleTimer}>
			{isRunning ? 'Stop' : 'Start'}
		</button>
	);
};

export default TimerButton;
