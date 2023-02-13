import "./Header.css";
import { BsSun } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header">
      <p className="toggle-theme">
        <BsSun />
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
