import React from 'react';
import './NavBar.css';
import eventLogo from '../assets/img/envintLogo.png';
import flag from '../assets/img/flag.png'
import { ArrowDropDown } from '@mui/icons-material';


const NavBar = () => {
  return (
    <div className='navbar-container'>
    <nav className="navbar">
      <div className="logo">  
        <img src={eventLogo} alt="logoImage"/>
        {/* <span>Business for Better</span> */}
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About Us</li>
       
        <li className='service-li'>Services<span><ArrowDropDown/></span></li>
       
     
      
        <li>Impact</li>
        <li>Envision</li>
        <li>Connect</li>
        <li>
        <img src={flag} alt="image"/>
        <ArrowDropDown/>
        </li>
       
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
