import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    return (
        <section className="services">
            <div className="services-container">
                <h2 className="services-title">Our Services</h2>
                <p className="services-description">
                    We are into various services in IT Infrastructure implementation, support and
                    Maintenance. We also provide consultancy services and requirement analysis for
                    both On-premise and Cloud infrastructure projects.
                </p>

                <div className="services-grid">
                    <div className="service-card">
                        <div className="card-image-wrap">
                            <img src="/img1.jpg" alt="Testing & Quality Assurance" />
                        </div>
                        <div className="card-label">
                            <h3>Testing & Quality Assurance</h3>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="card-image-wrap">
                            <img src="/img2.jpg" alt="HPC Solution For Oil & Gas" />
                        </div>
                        <div className="card-label">
                            <h3>HPC Solution For Oil & Gas</h3>
                        </div>
                    </div>
                </div>

                <div className="services-footer">
                    <a href="#more" className="know-more">
                        Know More <span>&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
