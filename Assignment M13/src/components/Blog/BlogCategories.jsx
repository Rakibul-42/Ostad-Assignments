import React from 'react';

const BlogCategories = ({ categories }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Blog Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="text-blue-500 hover:underline mb-2">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
