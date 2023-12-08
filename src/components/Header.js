import { useContext, useState } from "react";
import { APPLOGO, LOGIN } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";

const Header = () => {
  const { userName } = useContext(UserContext);
  const [loginBtn, setLoginBtn] = useState("Login");
  const cartItems = useSelector((store)=> {
    return store.cart.items;
  });
  console.log(cartItems);

  return (
    <div className="header">
      <div>
        <img className="food-app-logo" src={APPLOGO} />
      </div>
      <div>
        <ul className="nav-header">
          <Link to="/home" className="home"><li>Home</li></Link>
          <Link to="/about" className="about"><li>About</li></Link>
          <Link to="/careers" className="careers"><li>Careers</li></Link>
          <Link to="/cart" className="cart"><li>Cart: {cartItems.length} </li></Link>
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
          <li>{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
