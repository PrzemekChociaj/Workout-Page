
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import WorkoutPage from './components/WorkoutPage/WorkoutPage';

const Wrapper = () => {
	return (
		<div className=' h-screen bg-slate-300'>
			<Navbar />
			<Menu />
	<WorkoutPage />
		</div>
	);
};

export default Wrapper;
