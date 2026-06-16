import React from 'react';
import { Link } from 'react-router-dom';

const SocialMediaLinks = ({ links }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Social Media Links</h2>
      <ul className='flex justify-around text-lg '>
        {links.map((link, index) => (
          <li key={index} className='hover:text-blue-400 hover:underline btn'>
            <Link to={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
