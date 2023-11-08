import React from "react";

function SingleBlog({ blog }) {
  const { author, content, title } = blog;
  return (
    <article className="blog-component-page">
      <h2>{title}</h2>
      <h6>{author}</h6>
      <p>{content}</p>
    </article>
  );
}

export default SingleBlog;