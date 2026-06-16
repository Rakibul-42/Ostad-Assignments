import React from 'react';

const ProjectGallery = ({ images }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
          <div >
          <img src={images.image} alt="Project Image" className="w-full rounded shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
