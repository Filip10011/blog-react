import "./Header.css";
import { BsSun } from "react-icons/bs";
import { useContext } from "react";
import { MainContext } from "../../context/context";
const Header = () => {
  const { toggleTheme, theme } = useContext(MainContext);
  return (
    <div className="header">
      <p className="toggle-theme" onClick={toggleTheme}>
        <BsSun className={`${theme}`} />
      </p>
      <h2>Inc. This Morning</h2>
      <h1>My random blog</h1>
      <p>
        awesome place to make onself <br /> productive and entertained through
        daily updates.
      </p>
    </div>
  );
};

export default Header;
