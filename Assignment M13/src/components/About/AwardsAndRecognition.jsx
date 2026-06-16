import React from 'react';

const AwardsAndRecognition = ({ awards }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Awards and Recognition</h2>
      <div className='flex justify-evenly'>
        {awards.map((award, index) => (
          <p key={index} className="text-gray-700 mb-2 mr-1 font-semibold">{award}</p>
        ))}
      </div>
    </div>
  );
};

export default AwardsAndRecognition;
