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
						<div
							style={{ height: '100%', width: '100%', position: 'relative' }}>
							<IframeResizer
								src={videoUrl}
								style={{ width: '100%', height: '100%', border: 'none' }}
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
