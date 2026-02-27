import React from 'react';
import './WhyVividSection.css';

const WhyVividSection = () => {
    return (
        <section className="why-vivid-stats" id="about">
            <div className="bento-container">
                {/* Left Column */}
                <div className="bento-column left-col">
                    {/* Expert Hands Card */}
                    <div className="bento-card dark-card expert-hands">
                        <div className="card-content">
                            <h2 className="stat-number">80+</h2>
                            <h3 className="stat-label">Expert Hands</h3>
                            <p className="stat-description">
                                Skilled Professionals Delivering Structured Technology And
                                Infrastructure Solutions.
                            </p>
                        </div>
                    </div>

                    {/* World Map Image */}
                    <div className="bento-card image-card world-map">
                        <img src="/bg3.png" alt="World Map" className="bento-img" />
                    </div>

                    {/* Projects Done Card */}
                    <div className="bento-card dark-card projects-done">
                        <div className="card-content">
                            <h2 className="stat-number">300+</h2>
                            <h3 className="stat-label">Project Done</h3>
                            <p className="stat-description">
                                Successfully Executed Implementations, Optimizations, And
                                Modernization Initiatives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="bento-column right-col">
                    {/* Feature Image */}
                    <div className="bento-card image-card digital-conn">
                        <img src="/bg4.png" alt="Digital Connectivity" className="bento-img" />
                    </div>

                    {/* Happy Clients Blue Card */}
                    <div className="bento-card blue-card happy-clients">
                        <div className="card-content">
                            <div className="primary-stat">
                                <h2 className="stat-number">250+</h2>
                                <h3 className="stat-label">Happy Clients</h3>
                                <p className="stat-description">
                                    Organizations Trusting Our Expertise For Reliable, Scalable, And
                                    Resilient Systems.
                                </p>
                            </div>

                            <div className="secondary-info">
                                <h3 className="info-title">Region</h3>
                                <p className="info-text">
                                    Coalescing People, Consumer Insights And Technology With Food
                                    Trends To Help Our Customer Develop And Construct The Best-In-
                                    Class Design Of Restaurants, Bars, Bakery And Food Courts
                                </p>
                                <h2 className="region-stat">600+</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyVividSection;
