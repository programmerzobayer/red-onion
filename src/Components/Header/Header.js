import React from "react"
import logo from "../images/logo2.png"
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Header = () => {
 
  return (
    <div className="header">
    <div className=" container-xl d-flex justify-content-between align-items-center">
     <div className="logo">
      <Link index to='/'>
      <img src={logo} alt="" /></Link>
     </div>
     <div className="account">
    
      <span className="cart"> <FontAwesomeIcon icon={faCartShopping}  /></span>
      <button className="login">Log In</button>
      <Link to='signup'>
      <button className="signup">Sign up</button></Link>
     </div>
     </div>
    </div>
  )
};

export default Header;
