import React from "react";
import "../SearchBar/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form action="">
        <input type="text" placeholder="Search by Category" />
        <span>X</span>
        <button>Search!</button>
      </form>
    </div>
  );
};

export default SearchBar;
