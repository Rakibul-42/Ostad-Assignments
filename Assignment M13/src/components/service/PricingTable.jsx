import React from 'react';

const PricingTable = () => {
  const pricingOptions = [
    { name: 'Basic', price: '$29/month' },
    { name: 'Standard', price: '$59/month' },
    { name: 'Premium', price: '$99/month' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Plan</th>
            <th className="text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {pricingOptions.map((option, index) => (
            <tr key={index}>
              <td className="text-gray-700">{option.name}</td>
              <td className="text-gray-700">{option.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
