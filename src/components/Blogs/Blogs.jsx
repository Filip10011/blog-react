import React from "react";
import { allBlogs } from "../../config/blogs";
import "../Blogs/Blogs.css";
import BlogItem from "./BlogItem/BlogItem";

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs-wrapper">
      {blogs?.map((blog) => (
        <BlogItem
          key={blog.id}
          category={blog.category}
          title={blog.title}
          createdAt={blog.createdAt}
          authorAvatar={blog.authorAvatar}
          authorName={blog.authorName}
          id={blog.id}
          cover={blog.cover}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Blogs;
