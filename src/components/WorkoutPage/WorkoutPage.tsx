import { useLocation } from 'react-router-dom';
import IframeResizer from 'iframe-resizer-react';
import Calendar from '../Calendar/Calendar';
import Timer from '../Timer/Timer';

const WorkoutPage: React.FunctionComponent = () => {
	const location = useLocation();
	const { title, videoUrl } = location.state;

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<div className='flex flex-col items-center w-[50%] h-[70%] bg-white rounded shadow-lg'>
				<div className='w-full h-[80%] p-4'>
					{videoUrl && (
						<div className='h-full w-full relative'>
							<IframeResizer
								src={videoUrl}
								className='w-full h-full border-none'
							/>
						</div>
					)}
				</div>
				<div className='w-full h-[20%] p-4 ml-32 flex justify-center items-center'>
					<Timer />
					<Calendar />
				</div>
			</div>
		</div>
	);
};

export default WorkoutPage;
