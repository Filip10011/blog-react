import React, { useState } from "react";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Blogs from "../../components/Blogs/Blogs";

import { allBlogs } from "../../config/blogs";
import EmptyList from "../../components/EmptyList/EmptyList";

const Home = () => {
  const [blogs, setBlogs] = useState(allBlogs);

  const [searchTerm, setSearchTerm] = useState("");

  const clearSearch = () => {
    setSearchTerm("");
    setBlogs(allBlogs);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const filteredBlogs = allBlogs?.filter((blog) =>
      blog.category.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    console.log(filteredBlogs);
  };

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header />
      <SearchBar
        onChange={onChange}
        onSubmit={onSubmit}
        value={searchTerm}
        clearSearch={clearSearch}
      />
      {blogs.length ? <Blogs blogs={blogs} /> : <EmptyList />}
    </>
  );
};

export default Home;
