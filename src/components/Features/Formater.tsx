export const formatTime = (time: number): string => {
	const MINUTES_IN_ONE_HOUR: number = Math.floor(time / 60);

	const minutes: number = MINUTES_IN_ONE_HOUR;

	const seconds: number = time % 60;
	return `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
};
