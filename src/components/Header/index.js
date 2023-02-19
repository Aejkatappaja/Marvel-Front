import "./header.css";
import marvelLogo from "../../assets/img/marvel-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-logo">
        <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
          <img src={marvelLogo} alt="marvel-logo" />
        </Link>
      </div>
      <div className="navigation">
        <div className="numberOneAndTwo">
          <Link
            to="/characters"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <h1>Characters</h1>
          </Link>
        </div>
        <div className="numberOneAndTwo">
          <Link
            to="/Comics"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <h1>Comics</h1>
          </Link>
        </div>
        <div className="numberThree">
          <Link
            to="/favorites"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <h1>Favorites ⭑</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
