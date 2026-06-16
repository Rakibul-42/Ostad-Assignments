import React from 'react';

const AuthorBio = () => {
    const author = {
        name: 'Muhammed Mehedi Hasan',
        profileImage: 'https://muhammed-mehedi-hasan.netlify.app/static/media/sultan2.0bd1deef425577b102c2.jpg',
        bio: 'I was born and raised in a small rural village in Noakhali, Bangladesh where technological advancements, till this day hasn\'t fully reached. Eager to learn more about the industry that is becoming a vast phenomenon, I dipped my toes into the tech world and became fully immersed in what it has to offer. I want to continue refining my skills and become immersed with the right company.',
        website: 'https://muhammed-mehedi-hasan.netlify.app/',
      };
      
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex items-center">
        <img src={author.profileImage} alt={author.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-bold">{author.name}</h2>
          <p className="text-gray-500">{author.bio}</p>
          <div className="mt-2">
            <a href={author.website} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
