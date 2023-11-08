import React from "react";

function SingleService({ service }) {
  const { title, description, price, images } = service;
  return (
    <article className="article-level-css">
      <img
        src={images[0]}
        alt=""
        className="img-fluid "
        style={{ maxHeight: "230px", objectFit: "cover" }}
      />
      <h4>{title}</h4>
      <h3>$ {price}</h3>
      <p>{description}</p>
    </article>
  );
}

export default SingleService;