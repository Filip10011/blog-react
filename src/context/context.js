import React, { createContext, useState } from "react";

import { allBlogs } from "../config/blogs";
const initialState = [];

export const MainContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <MainContext.Provider value={{ blogs: allBlogs, theme }}>
      {children}
    </MainContext.Provider>
  );
};
