import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="navbar_links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
      <div className="navbar_button">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
