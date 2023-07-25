import { Link } from 'react-router-dom';

interface MenuItem {
	title: string;
	link: string;
	videoUrl: string;
}

const Menu: React.FunctionComponent = () => {
	const menuItems: MenuItem[] = [
		{
			title: 'Plecy',
			link: '/workout/plecy',
			videoUrl: 'https://www.youtube.com/embed/zgfcOWuTeYA',
		},
		{
			title: 'Klatka piersiowa',
			link: '/workout/klatka-piersiowa',
			videoUrl: 'https://www.youtube.com/embed/NsEbXsTwas8',
		},
		{
			title: 'Biceps',
			link: '/workout/biceps',
			videoUrl: 'https://www.youtube.com/embed/snA6ls2kG3U',
		},
		{
			title: 'Triceps',
			link: '/workout/triceps',
			videoUrl: 'https://www.youtube.com/embed/_d_xnKSPV1s',
		},
		{
			title: 'Brzuch',
			link: '/workout/brzuch',
			videoUrl: 'https://www.youtube.com/embed/QdIutxfm_hU',
		},
		{
			title: 'Nogi',
			link: '/workout/nogi',
			videoUrl: 'https://www.youtube.com/embed/FEWRAdelKsc',
		},
	];

	return (
		<div className='relative w-screen h-screen'>
			<div
				className='absolute top-0 left-0 w-full h-full'
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80')",
					filter: 'blur(10px)',
				}}
			/>
			<nav className='w-full h-full p-4 flex flex-col justify-start items-center text-white'>
				<div className='text-4xl font-bold mt-10 mb-4 z-10'>
					Co chciałbyś ćwiczyć?
				</div>
				<div className='space-y-12 text-center z-10'>
					{menuItems.map((item) => (
						<Link
							key={item.link}
							state={{ title: item.title, videoUrl: item.videoUrl }}
							to={{
								pathname: item.link,
							}}
							className='block px-3 py-2 rounded-md text-3xl font-medium relative'>
							{item.title}
							<span className='absolute bottom-0 left-0 w-full h-1 bg-red-700 transform scale-x-0 origin-left transition-transform duration-300'></span>
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default Menu;
