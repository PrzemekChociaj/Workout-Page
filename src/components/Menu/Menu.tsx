import React from 'react';
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
		<nav className='bg-gray-800 w-screen h-screen p-4'>
			<div className='w-full h-full mx-auto flex flex-col justify-center items-center'>
				<div className='text-white text-xl font-bold mb-4'>
					Co chciałbyś ćwiczyć?
				</div>
				<div className='space-y-4'>
					{menuItems.map((item) => (
						<Link
							key={item.link}
							state={{ title: item.title, videoUrl: item.videoUrl }}
							to={{
								pathname: item.link,
							}}
							className='block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium'>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Menu;
