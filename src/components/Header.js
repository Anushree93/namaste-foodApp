import { useState } from "react";
import { APPLOGO, LOGIN } from "../utils/constant";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className="header">
            <div>
               <img className='food-app-logo' src={APPLOGO}/>
            </div>
            <div>
                <ul className="nav-header"> 
                    <li>Home</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Cart</li>
                    <li className="login-btn" onClick={
                        ()=>
                        {
                            loginBtn ==='Login'? setLoginBtn('Logout'):setLoginBtn("Login");
                        }}>{loginBtn}</li>
                </ul>
            </div>
        </div>
    )
 }

 export default Header;