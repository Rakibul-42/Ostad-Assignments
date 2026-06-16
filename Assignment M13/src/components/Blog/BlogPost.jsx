import React from 'react';

const BlogPost = ({ post }) => {
    
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default BlogPost;
