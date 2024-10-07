import React from 'react';
import './Footer.css'; // Import the CSS for the footer
import envintlogo from '../assets/img/envintLogo.png'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { LocationOnSharp } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='footer-content-1'>
        <img 
          src={envintlogo} 
          alt="Envint Logo" 
          className="footer-logo" 
        />
        </div>


        <div className='footer-content-2'>
        <div className="footer-info">
          <h2>Get in touch</h2>
          <p><spaan><LocationOnSharp/></spaan>
            91 Springboard, Godrej & Boyce, LBS Marg, Vikhroli West, Mumbai 400079</p>       
             <a href="https://goo.gl/maps/XXXXXX" target="_blank" rel="noopener noreferrer">View Map</a>
          <p>Email: <a href="mailto:connect@envintglobal.com">connect@envintglobal.com</a></p>
        </div>

        <div className="footer-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon" />
          </a>
          <a href="mailto:connect@envintglobal.com">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All copyrights reserved to Envint Services LLP.</p>
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
