import React from 'react';
import './AboveFooter.css'; // Link to your stylesheet
import AboveFooterImg from '../assets/img/aboveFooterImg.png'

const AboveFooter = () => {
    return (
        <div className="above-footer-container">
                <h2>Get in touch with us</h2>
                <p>Please let us know your requirements and we will revert soon.</p>
         <div className='below-container'>
            <div className="above-footer-left">
                <img 
                    src={AboveFooterImg} 
                    alt="Environment illustration"
                    className="above-footer-image"
                />
            </div>
            <div className="above-footer-right">
            
                <form className="above-footer-form">
                    <div className="form-row">
                    <div className="half-width-inputs">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="half-width-inputs1">
                        <input type="email" placeholder="Email id" required />
                        <input type="tel" placeholder="Phone No." required />
                    </div>
                    </div>
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit" className="send-message-btn">Send Message</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AboveFooter;
