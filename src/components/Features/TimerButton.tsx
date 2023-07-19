

interface TimerButtonProps {
  isRunning: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;

}

const getButtonColor = (isRunning: boolean): string =>
	isRunning ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700';

const TimerButton: React.FunctionComponent<TimerButtonProps> = ({
  isRunning,
  toggleTimer,
  resetTimer
}) => {
  const buttonClassName: string = getButtonColor(isRunning);

  return (
    <div>
      <button
        className={`${buttonClassName} text-white font-bold py-2 px-4 rounded mr-2`}
        onClick={toggleTimer}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button
        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerButton;






