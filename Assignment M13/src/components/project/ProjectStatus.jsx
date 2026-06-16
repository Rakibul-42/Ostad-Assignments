import React from 'react';

const ProjectStats = ({ projectStats }) => {
    
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Project Statistics</h2>
      <ul>
      <li key={projectStats.id} className="mb-4">
            <h3 className="text-lg font-semibold">{projectStats.project}</h3>
            <ul className="list-disc ml-6">
              <li>Duration: {projectStats.duration}</li>
              <li>Budget: {projectStats.budget}</li>
              <li>Milestones: {projectStats.milestones.join(', ')}</li>
              <li>Client Satisfaction: {projectStats.clientSatisfaction}</li>
              <li>ROI: {projectStats.roi}</li>
            </ul>
          </li>
      </ul>
    </div>
  );
};

export default ProjectStats;
