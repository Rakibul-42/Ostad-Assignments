import React, { useEffect, useState } from "react";
import AllBlog from "./AllBlog";
const myDatas = [
  {
    id: 1,
    title: "Project Bangla",
    author: "Rahim 1",
    date: "2023-05-05T03:36:20Z",
    content:
      "About project Bangla.",
  },
  {
    id: 2,
    title: "Project Math",
    author: "Rahim 2",
    date: "2022-12-05T03:36:20Z",
    content:
    "About project Math.",
  },
  {
    id: 3,
    title: "Project Chemistry",
    author: "Rahim 3",
    date: "2023-01-05T03:36:20Z",
    content:
    "About project Chemistry.",
  },
  {
    id: 4,
    title: "Project ICT",
    author: "Rahim 4",
    date: "2023-09-05T03:36:20Z",
    content:
    "About project ICT.",
  },
];

function BlogData() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(myDatas);
  }, []);

  return (
    <>
      <AllBlog blogs={blogs} />
    </>
  );
}

export default BlogData;