import React from "react";
import { allBlogs } from "../../config/blogs";
import "../Blogs/Blogs.css";
import Category from "../Category/Category";

const Blogs = () => {
  return (
    <div className="blogs-wrapper">
      <div>
        {allBlogs.map((blog) => (
          <div key={blog.id}>
            <img className="blog-item-cover" src={blog.cover} alt="cover" />
            <Category label={blog.category} />
            <h3>{blog.title}</h3>
            <p className="blog-item-desc">{blog.description}</p>
            <footer>
              <div className="blog-item-author">
                <img src={blog.authorAvatar} alt="avatar" />
                <div>
                  <h6>{blog.authorName}</h6>
                  <p>{blog.createdAt}</p>
                </div>
              </div>
              <a className="blog-item-link" href={`/blog/${blog.id}`}>
                ➝
              </a>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
