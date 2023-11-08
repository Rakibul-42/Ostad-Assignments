import React, { useEffect, useState } from "react";

function BlogSidebar() {
  const [recentPosts, setRecentPosts] = useState([]);

  const sampleRecentPosts = [
    "Food crisis : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Global warming : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lack of workplace : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

  useEffect(() => {
    setRecentPosts(sampleRecentPosts);
  }, []);

  return (
    <div className="sidebar">
      <div className="main-content">
      </div>

      <div >
        <h2>Recent Posts</h2>
        <ul>
          {recentPosts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogSidebar;
