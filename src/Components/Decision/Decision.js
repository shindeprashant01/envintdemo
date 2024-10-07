import React from 'react';
import './Decision.css'; // Import the CSS file for styling
import decisionImg1 from '../assets/img/decisionImg1.png';
import decisopnImg2 from '../assets/img/decisionImg2.png';
import decisionImg3 from '../assets/img/decisionImg3.png';

const Decision = () => {
  return (
    <div className="decision-container">
      <h2 className="decision-title">In making decisions</h2>
      <div className="decision-cards">
        <div className="decision-card">
          <img src={decisionImg1} alt="Infosys And ESG" className="decision-image1" />
          <p className="decision-text">Infosys And ESG – A Journey That Started With G</p>
          <div className="decision-content-hover">
            <h3>Infosys And ESG – A Journey That Started With G</h3>
            <p>On my first site visit to Infosys Mysore campus back in 2011 for a sales call, I was pleasantly surprised that I didn’t realize that I was right next to a sewage treatment plant (STP).</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="decision-card">
          <img src={decisopnImg2} alt="Standardization Of Sustainability Reporting" className="decision-image2" />
          <p className="decision-text">Move Towards Standardization Of Sustainability Reporting</p>
          <div className="decision-content-hover">
            <h3>Move Towards Standardization Of Sustainability Reporting</h3>
            <p>Initiatives for global sustainability reporting standards aim to align global efforts toward transparency.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="decision-card">
          <img src={decisionImg3} alt="Bird Singing" className="decision-image3" />
          <p className="decision-text">Let The Birds Keep Singing</p>
          <div className="decision-content-hover">
            <h3>Let The Birds Keep Singin</h3>
            <p>We should focus on preserving natural habitats to ensure that the birds keep singing for generations to come. to ensure that the birds keep singing for generations to come.for generations to come</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decision;
