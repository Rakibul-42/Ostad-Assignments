import React, { useState } from 'react';
import BlogPost from './BlogPost';


const BlogList = ({ blogPosts ,getPost }) => {
    const [post , setPost] = useState(blogPosts[0]);


  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className=' flex justify-evenly mb'> 
        {blogPosts.map((post, index) => (
          <button onClick={() => setPost(blogPosts[index])} key={post.id} className=" btn hover:underline mb-2">
            {post.title}
          </button>
        ))}
      </div>

            <BlogPost post={post}/>
    </div>
  );
};

export default BlogList;
