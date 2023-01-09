import React from "react";
import { allBlogs } from "../../config/blogs";
import "../Blogs/Blogs.css";
import BlogItem from "./BlogItem/BlogItem";

const Blogs = () => {
  return (
    <div className="blogs-wrapper">
      <div>
        {allBlogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
