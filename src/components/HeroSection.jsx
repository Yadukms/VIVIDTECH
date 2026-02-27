import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Cutting-Edge Technology Solutions<br />
                    Engineered For Modern Businesses
                </h1>
                <p className="hero-description">
                    Delivering Infrastructure, Cloud, And Performance-Driven Solutions Designed To Enhance Operational Efficiency, Strengthen Resilience, And Support Scalable Digital Growth.
                </p>

                <div className="hero-cta">
                    <button className="enquire-now-btn">Enquire Now</button>
                </div>
            </div>

            <div className="hero-info-section">
                <div className="info-steps-container">
                    <div className="hero-step h-step-1"></div>
                    <div className="hero-step h-step-2"></div>
                    <div className="info-box-wrapper main-step">
                        <div className="info-box">
                            <div className="info-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                            <h3 className="info-title">Infrastructure Modernization</h3>
                            <p className="info-text">Enterprise Systems<br />Cloud & Network</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
