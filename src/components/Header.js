import { APPLOGO, LOGIN } from "../utils/constant";

const Header = () => {
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
                    <li><img className="login-btn" src={LOGIN}/></li>
                </ul>
            </div>
        </div>
    )
 }

 export default Header;