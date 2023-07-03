import Calendar from './components/Calendar/Calendar';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';

const Wrapper = () => {
	return (
		<div className=' h-screen bg-slate-300'>
			<Navbar />
			<Menu />
			<Calendar />
		</div>
	);
};

export default Wrapper;
