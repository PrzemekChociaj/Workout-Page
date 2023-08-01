import IframeResizer from 'iframe-resizer-react';
import Calendar from '../Calendar/Calendar';
import Timer from '../Timer/Timer';
import useLocationState from '../../Hooks/UseLocation';

const WorkoutPage: React.FunctionComponent = () => {
	const { title, videoUrl } = useLocationState();

	return (
		<div className='flex items-center justify-center mr-64 h-screen bg-[#61677A]'>
			<div className='flex flex-col items-center w-[50%] h-[70%] bg-[#FFF6E0] rounded shadow-lg'>
				<div className='w-full h-[100%] p-4'>
					{videoUrl && (
						<div className='h-full w-full relative'>
							<IframeResizer
								src={videoUrl}
								className='w-full h-full   border-none'
							/>
						</div>
					)}
				</div>

				<Timer />
				<Calendar />
			</div>
		</div>
	);
};

export default WorkoutPage;
