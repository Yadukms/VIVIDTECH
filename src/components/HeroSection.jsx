import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="grid-background"></div>
            <div className="radial-glow"></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span>Cutting-Edge Tech Solutions</span>
                    <span>Customized For</span>
                    <span className="highlight">Your Business Needs</span>
                </h1>
                {/* 
                <div className="hero-description-container"> */}
                <p className="hero-description">
                    we are group of creating success stories with digital transformation
                    for our prestigious clients globally,across many verticals
                </p>
                {/* </div> */}

                <div className="hero-cta">
                    <button className="enquire-btn">
                        ENQUIRE NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
