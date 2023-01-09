import React from "react";
import { allBlogs } from "../../config/blogs";
import "../Blogs/Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-wrapper">
      <div>
        {allBlogs.map((blog) => (
          <div key={blog.id}>
            <h2>Category: {blog.category}</h2>
            <h1>{blog.title}</h1>
            <h3>Created at:{blog.createdAt}</h3>
            <h3>Author name: {blog.authorName}</h3>
            <img className="avatar" src={blog.authorAvatar} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
