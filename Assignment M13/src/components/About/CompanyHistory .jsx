import React from 'react';

const CompanyHistory = ({ historyText }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Company History</h2>
      <p className="text-gray-700">{historyText}</p>
    </div>
  );
};

export default CompanyHistory;
