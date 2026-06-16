import React from 'react';

const AboutUs = ({ aboutText }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
      <p className="text-gray-700">{aboutText}</p>
    </div>
  );
};

export default AboutUs;
