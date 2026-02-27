import React from 'react';
import './TechnologiesSection.css';

const TechnologiesSection = () => {
    return (
        <section className="design-service" id="technologies">
            <div className="design-service-container">
                {/* Upper Content Section */}
                <div className="design-header-row">
                    <div className="header-left">
                        <h2 className="design-main-headline">
                            Delivering Scalable,<br />
                            Resilient Cloud &<br />
                            Infrastructure Solutions
                        </h2>
                    </div>
                    <div className="header-right">
                        <p className="design-top-description">
                            Integrating Cloud Platforms, Infrastructure Reliability, And Performance
                            Optimization Strategies To Help Organizations Build Secure, Stable, And
                            Future-Ready Digital Environments.
                        </p>
                    </div>
                </div>

                {/* Main Feature Section */}
                <div className="design-feature-row">
                    <div className="design-feature-left">
                        <div className="service-number">01</div>
                        <h3 className="service-title">Design Service</h3>
                        <p className="service-subtitle">Technology Enablement Services</p>
                        <p className="service-description">
                            Strengthening Digital Ecosystems Through Structured Implementation,
                            Operational Stability Frameworks, And Performance-Focused Engineering
                            Designed To Support Evolving Business And Platform Demands.
                        </p>
                        <button className="design-read-more">Read More</button>
                    </div>

                    <div className="design-feature-right">
                        <div className="design-image-wrapper">
                            <img src="/bg2.png" alt="Digital Infrastructure" className="design-feature-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
