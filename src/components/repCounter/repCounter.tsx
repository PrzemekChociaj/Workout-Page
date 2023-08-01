import React, { useState, useEffect } from 'react';

interface RepCounterProps {
	initialReps?: number;
}

const RepCounter: React.FunctionComponent<RepCounterProps> = ({
	initialReps = 0,
}) => {
	const [reps, setReps] = useState<number>(initialReps);
	const [previousReps, setPreviousReps] = useState<number[]>([]);

	const handleIncrement = () => {
		setReps((prevReps) => prevReps + 1);
	};

	const handleDecrement = () => {
		setReps((prevReps) => Math.max(prevReps - 1, 0));
	};

	const handleSaveTraining = () => {
		setPreviousReps((prevReps) => [...prevReps, reps]);
		setReps(0);
	};

	useEffect(() => {
		const previousRepsFromStorage = localStorage.getItem('previousReps');
		if (previousRepsFromStorage) {
			setPreviousReps(JSON.parse(previousRepsFromStorage));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('previousReps', JSON.stringify(previousReps));
	}, [previousReps]);

	return (
		<div className='rep-counter p-4 bg-[#FFF6E0]'>
			<h3 className='text-xl font-semibold mb-2'>Rep Counter:</h3>
			<div className='counter flex items-center'>
				<button
					className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2'
					onClick={handleDecrement}>
					-
				</button>

				<button
					className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
					onClick={handleIncrement}>
					+
				</button>
				<span className='text-2xl font-semibold mr-2'> : {reps}</span>
			</div>
			<button
				className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2'
				onClick={handleSaveTraining}>
				Save Training
			</button>

			{previousReps.length > 0 && (
				<div className='previous-reps mt-4'>
					<h3 className='text-xl font-semibold mb-2'>
						Previous Training Reps:
					</h3>
					<ul>
						{previousReps.map((rep, index) => (
							<li key={index} className='text-lg mb-2'>
								{rep}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default RepCounter;
