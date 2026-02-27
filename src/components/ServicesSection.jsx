import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    const logos = Array.from({ length: 18 }, (_, i) => {
        const num = i + 1;
        if (num === 6) return null; // pic6 is missing
        if (num === 10) return `/pic10.jpg`;
        return `/pic${num}.png`;
    }).filter(Boolean);

    return (
        <section className="services" id="service">
            {/* Logo Marquee Section */}
            <div className="logo-marquee-container">
                <div className="logo-track">
                    {logos.concat(logos).map((logo, index) => (
                        <div className="logo-slide" key={index}>
                            <img src={logo} alt={`Partner ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="services-content-wrapper">
                <h2 className="services-main-title">
                    Vivid Tech Solutions Provides End-To-End<br />
                    Cloud & Infrastructure Expertise
                </h2>
                <p className="services-sub-text">
                    Delivering Resilient Architectures, Scalable Platforms, And Performance-Driven Systems Designed To Strengthen<br />
                    Operational Stability And Accelerate Digital Transformation Initiatives
                </p>
                <button className="read-more-btn">Read More</button>
            </div>

            {/* Bottom Feature Image Section */}
            <div className="services-feature-container">
                <div className="feature-image-box">
                    <img src="/bg1.jpg" alt="Cloud Operations" className="feature-bg" />

                    {/* Stepped Overlay */}
                    <div className="stepped-overlay">
                        <div className="overlay-step step-1"></div>
                        <div className="overlay-step step-2"></div>
                        <div className="overlay-step step-3"></div>
                    </div>

                    {/* Floating Info Card */}
                    <div className="feature-floating-card">
                        <div className="card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                        <h4 className="card-message">
                            Vivid Tech Solutions Enables Reliable<br />
                            Digital & Cloud Operations
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
