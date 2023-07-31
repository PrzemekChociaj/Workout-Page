import { useLocation } from 'react-router';

interface LocationState {
	title: string;
	videoUrl: string;
}

const useLocationState = (): LocationState => {
	const location = useLocation();
	if (!location.state) {
		throw new Error('No state found in location object.');
	}
	const state: LocationState = location.state;

	return state;
};

export default useLocationState;
