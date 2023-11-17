import { useState } from "react";
import { APPLOGO, LOGIN } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div>
        <img className="food-app-logo" src={APPLOGO} />
      </div>
      <div>
        <ul className="nav-header">
          <Link to="/home" className="home"><li>Home</li></Link>
          <Link to="/about" className="about"><li>About</li></Link>
          <Link to ="/careers" className="careers"><li>Careers</li></Link>
          <Link to="/cart" className="cart"><li>Cart</li></Link>
          <li
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
