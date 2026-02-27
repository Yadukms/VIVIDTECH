import React from 'react';
import './InnovationSection.css';

const InnovationSection = () => {
    return (
        <section className="innovation-section">
            <div className="glow-background">
                <svg className="moving-ellipse" xmlns="http://www.w3.org/2000/svg" width="936" height="1398" viewBox="0 0 936 1398" fill="none">
                    <g filter="url(#filter0_f_1_221)">
                        <path d="M503.995 571.115C503.995 855.339 962.751 1233.93 678.526 1233.93C394.302 1233.93 163.892 962.75 163.892 678.526C163.892 394.301 394.302 163.892 678.526 163.892C962.751 163.892 503.995 286.89 503.995 571.115Z" fill="url(#paint0_linear_1_221)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_221" x="0" y="-0.000411987" width="935.303" height="1397.82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="81.946" result="effect1_foregroundBlur_1_221" />
                        </filter>
                        <linearGradient id="paint0_linear_1_221" x1="467.651" y1="163.892" x2="467.651" y2="1193.16" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2F6BFF" stop-opacity="0.45" />
                            <stop offset="1" stop-color="#2F6BFF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="innovation-container">
                {/* Left Side: Headline & Subtext */}
                <div className="innovation-left">
                    <h2 className="innovation-headline">
                        Driving Innovation Through<br />
                        Reliable Technology &<br />
                        Cloud Strategies
                    </h2>
                    <p className="innovation-subtext">
                        Delivering Structured Infrastructure Solutions, Cloud<br />
                        Architectures, And Performance-Focused Engineering Designed<br />
                        To Support Evolving Business And Operational Demands.
                    </p>
                </div>

                {/* Right Side: Project Cards */}
                <div className="innovation-right">
                    <div className="project-detail-card">
                        <div className="project-detail-image">
                            <img src="/bg10.png" alt="Cloud Infrastructure" />
                        </div>
                        <div className="project-detail-info">
                            <h3 className="project-detail-title">
                                Optimizing Cloud Infrastructure<br />
                                For Scalable Business Operations
                            </h3>
                            <p className="project-detail-description">
                                Structured Cloud Deployments And Resilience-Focused<br />
                                Architectures Engineered For Stability, Security, And<br />
                                Performance.
                            </p>
                        </div>
                    </div>

                    <div className="project-detail-card">
                        <div className="project-detail-image">
                            <img src="/bg11.png" alt="System Performance" />
                        </div>
                        <div className="project-detail-info">
                            <h3 className="project-detail-title">
                                Enhancing System Performance<br />
                                Through Reliability Engineering
                            </h3>
                            <p className="project-detail-description">
                                Proactive Optimization And Infrastructure Refinement Strategies<br />
                                Designed To Improve Uptime, Efficiency, And Operational<br />
                                Continuity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationSection;
