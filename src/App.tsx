import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import WorkoutPage from './components/WorkoutPage/WorkoutPage';

const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Menu />} />
			
				<Route path='/workout/:exercise' element={<WorkoutPage />} />
			</Routes>
		</Router>
	);
};

export default App;
