import IframeResizer from 'iframe-resizer-react';
import Calendar from '../Calendar/Calendar';
import { back } from '../../Data/WorkoutVideos';

const WorkoutPage: React.FunctionComponent = () => {
  return (
    <div className='flex absolute justify-center items-center rounded-md h-[80%] w-[60%] bottom-0 left-96 ml-32 mb-12 bg-gray-100'>
      <Calendar />

      <div className='w-[60%] mx-auto h-[60%] p-4 bg-white rounded shadow-lg'>
        <IframeResizer src={back} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );

};

export default WorkoutPage;
