import { menuItems } from '../../Data/WorkoutVideos';
import Links from './Links';

const backgroundImageStyle = {
	backgroundImage:
		"url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80')",
	filter: 'blur(12px)',
};

const Menu: React.FunctionComponent = () => {
	return (
		<div className='relative w-screen h-screen'>
			<div
				className='absolute top-0 left-0 w-full h-full'
				style={backgroundImageStyle}
			/>
			<nav className='w-full h-full p-4 flex flex-col justify-start items-center text-white'>
				<div className='text-4xl font-bold mt-10 mb-4 z-10'>
					Co chciałbyś ćwiczyć?
				</div>
				<div className='space-y-12 text-center z-10'>
					{/* Use the Links component here */}
					<Links menuItems={menuItems} />
				</div>
			</nav>
		</div>
	);
};

export default Menu;
