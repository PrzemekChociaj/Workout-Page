import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  title: string;
  link: string;
  videoUrl: string;
}

interface LinksProps {
  menuItems: MenuItem[];
}

const Links: React.FunctionComponent<LinksProps> = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item) => (
        <Link
          key={item.link}
          state={{ title: item.title, videoUrl: item.videoUrl }}
          to={{
            pathname: item.link,
          }}
          className='block px-3 py-2 rounded-md text-3xl font-medium relative'
        >
          {item.title}
          <span className='absolute bottom-0 left-0 w-full h-1 bg-red-700 transform scale-x-0 origin-left transition-transform duration-300'></span>
        </Link>
      ))}
    </>
  );
};

export default Links;
