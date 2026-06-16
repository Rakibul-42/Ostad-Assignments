import React from 'react';

const OfficeLocations = ({ locations }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Office Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <strong>{location.city} Office:</strong> {location.address}
          </li>
        ))}
      </ul>
    </div>
  );    
};

export default OfficeLocations;
