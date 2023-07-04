import IframeResizer from 'iframe-resizer-react';
import Calendar from '../Calendar/Calendar';
import Timer from '../Timer/Timer';

const WorkoutPage = () => {
	return (
		<div className='flex absolute justify-center items-center rounded-md h-[80%] w-[60%] bottom-0 left-96 ml-32 mb-12 bg-gray-100'>
			<Calendar />
			<Timer />
			<div className='max-w-md mx-auto p-4 bg-white rounded shadow-lg'>
				<IframeResizer
					src='https://www.example.com'
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
		</div>
	);
};

export default WorkoutPage;
