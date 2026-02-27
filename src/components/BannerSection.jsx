import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <section className="stability-banner">
            <div className="banner-bg">
                <img src="/bg9.png" alt="Server Infrastructure" className="bg-image" />
                <div className="banner-overlay"></div>
            </div>

            <div className="banner-content">
                <div className="top-headline-container">
                    <h2 className="main-headline">
                        Engineering Stability,<br />
                        Performance,<br />
                        And Resilience Across<br />
                        Digital Ecosystems
                    </h2>
                </div>

                <div className="bottom-subtext-container">
                    <div className="subtext-wrapper">
                        <div className="accent-bar"></div>
                        <p className="subtext-content">
                            Vivid Tech Solutions Delivers Structured Technology, Cloud, And Infrastructure
                            Services Through Disciplined Engineering, Practical Implementation Strategies,
                            And A Reliability-First Operational Mindset
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
