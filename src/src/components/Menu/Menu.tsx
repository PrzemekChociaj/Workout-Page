const categories: string[] = [
	'Plecy',
	'Klatka piersiowa',
	'Nogi',
	'Biceps',
	'Triceps',
	'Brzuch',
];

const Menu: React.FunctionComponent = () => {
	return (
		<div className='h-screen w-1/5 bg-gray-200 p-4'>
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-2xl font-bold'>Menu</h1>
			</div>
			<div>
				{categories.map((category: string) => (
					<div
						key={category}
						className='p-4 bg-gray-300 hover:bg-gray-400 rounded mb-2'>
						{category}
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
