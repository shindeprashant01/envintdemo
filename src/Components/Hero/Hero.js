

import React, { useState } from 'react';
import './Hero.css';
import earth from '../assets/img/earth.png';
import earth2 from '../assets/img/earth2.png';
import earth3 from'../assets/img/earth3.png';


const Hero = () => {
  
  const [activeComponent, setActiveComponent] = useState(1); 

  
  const handleComponentClick = () => {
 
    setActiveComponent((prevComponent) => (prevComponent === 3 ? 1 : prevComponent + 1));
  };

  const content = [
    {
      title: 'Cleaner environment. Engaged communities. Trusted institutions',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      imgSrc: earth,
      btnText: 'Connect',
    },
    {
      title: 'Our Version of the Future',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      imgSrc: earth2,
      btnText: 'Connect',
    },
    {
      title: 'We help businesses progress on sustainability',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      imgSrc: earth3,
      btnText: 'Connect',
    },
  ];

  // Select the active content based on the current component
  const activeContent = content[activeComponent - 1];

  return (
    <div onClick={handleComponentClick}>
      <section className="hero">
        <div className="hero-content">
          <h1>{activeContent.title}</h1>
          <p>{activeContent.text}</p>
          <button className="hero-btn">{activeContent.btnText}</button>
        </div>
        <div className="hero-image">
          <img src={activeContent.imgSrc} alt="Visual" />
        </div>
      </section>
    </div>
  );
};

export default Hero;


// import React from 'react';
// import './Hero.css';
// import earth from '../assets/img/earth.png';

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>Cleaner environment. Engaged communities. Trusted institutions</h1>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
//         <button className="hero-btn">Connect</button>
//       </div>
//       <div className="hero-image">
//         <img src={earth} alt="Globe" />
//       </div>
//     </section>
//   );
// };

// export default Hero;
