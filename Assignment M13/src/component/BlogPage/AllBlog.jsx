import React from "react";
import SingleBlog from "./SingleBlog";

function AllBlog({ blogs }) {
  return (
    <section>
      {blogs &&
        blogs.map((blog, index) => {
          return <SingleBlog key={index.toString()} blog={blog} />;
        })}
    </section>
  );
}

export default AllBlog;