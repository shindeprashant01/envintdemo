import React from 'react';
import './Better.css';
import betterImg1 from '../assets/img/betterImg1.png';
import betterImg2 from '../assets/img/betterImg2.png';
import betterImg3 from '../assets/img/betterImg3.png'

const Better = () => {
  return (
    <div className="better-container">
      <h2>And go for better</h2>
      <div className="better-stats"> 
        <div className="stat-item">
          <img src={betterImg3} alt="Clients Icon" className="stat-icon" />
          <h3>50+</h3>
          <p>Clients and counting</p>
        </div>
        <div className="stat-item">
          <img src={betterImg2} alt="Engagements Icon" className="stat-icon" />
          <h3>150+</h3>
          <p>Engagements</p>
        </div>
        <div className="stat-item">
          <img src={betterImg1} alt="Countries Icon" className="stat-icon" />
          <h3>9</h3>
          <p>Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Better;
