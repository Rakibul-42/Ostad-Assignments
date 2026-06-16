import React from 'react';

const ProjectDetail = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <h3 className="text-lg font-bold mb-2">Key Features:</h3>
      <ul>
        {data.features.map((feature, index) => (
          <li key={index} className="text-gray-700">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
