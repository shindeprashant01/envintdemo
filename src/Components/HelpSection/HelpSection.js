import React from 'react';
import './HelpSection.css';
import maskGroup from '../assets/img/MaskGroup.png'
const HelpSection = () => {
  return (
    <div className="help-section">
      <h1 className="help-title">We help you</h1>
      <div className="help-cards">
        <div className="help-card">
          <div className="hexagon">
            <img src={maskGroup} alt="Corporate Sustainability" />
          </div>
          <h3>Corporate Sustainability</h3>
          <p>Incorporate sustainability in your core strategy & operations</p>
        </div>
        <div className="help-card">
          <div className="hexagon">
            <img src={maskGroup} alt="Responsible Investment" />
          </div>
          <h3>Responsible Investment</h3>
          <p>Build on ESG principles to channelize funds into responsible businesses</p>
        </div>
        <div className="help-card">
          <div className="hexagon">
            <img src={maskGroup} alt="Research & Analytics" />
          </div>
          <h3>Research & Analytics</h3>
          <p>Gain insights on sustainability parameters to make decisions</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
