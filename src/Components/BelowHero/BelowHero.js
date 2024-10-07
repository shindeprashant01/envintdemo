import React from 'react';
import './BelowHero.css';
import plantImage from '../assets/img/plantImge.png'


const BelowHero = () => {
  return (
    <section className="below-hero">
      <div className="below-hero-image">
        <img src={plantImage} alt="Plant" />
      </div>
      <div className="below-hero-content">
        <h2>Sustainability Climate Change • ESG</h2>
        <p>From the air we breathe and the water we drink to the future we want, 
          the desire for better touches us all ir we breathe and the water we drink to the future we want, 
          the desire for better touches us water we drink to the future we want, 
          the desire for better touches us all ir we breathe and the</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </section>
  );
};

export default BelowHero;
