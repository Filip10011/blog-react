import React from "react";
import Category from "../../Category/Category";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
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
  );
};

export default BlogItem;
