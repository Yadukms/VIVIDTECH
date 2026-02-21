import React, { useState } from 'react';
import './WhyVividSection.css';

const WhyVividSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: "End-to-end digital transformation",
            subheading: "We help you navigate the complexity of digital change to drive growth and efficiency through strategic technology adoption."
        },
        {
            title: "Infrastructure & cloud expertise",
            subheading: "Scalable, secure, and resilient cloud solutions tailored to your business needs, ensuring maximum uptime and performance."
        },
        {
            title: "24×7 monitoring & service desk",
            subheading: "Proactive management and rapid response to ensure your systems are always up and running, minimizing any business disruption."
        },
        {
            title: "Managed services & NOC",
            subheading: "Strategic IT management and network operations for seamless business continuity and specialized technical support."
        },
        {
            title: "Operational excellence & reliability",
            subheading: "Leveraging industry best practices to deliver consistent, high-quality performance you can trust for your critical assets."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="why-vivid">
            <div className="why-vivid-container">
                <div className="why-vivid-header">
                    <h2 className="why-title">Why VIVIDTECH?</h2>
                    <a href="#about" className="more-link">
                        <span className="link-text">More About The Company</span> <span>&rarr;</span>
                    </a>
                </div>

                <div className="why-vivid-content">
                    <div className="features-side">
                        <div className="accordion-list">
                            {features.map((feature, index) => (
                                <div key={index} className="accordion-item">
                                    <div className="feature-row" onClick={() => toggleAccordion(index)}>
                                        <h3 className="feature-label">{feature.title}</h3>
                                        <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}>
                                            ↓
                                        </span>
                                    </div>
                                    <div className={`feature-details ${activeIndex === index ? 'visible' : ''}`}>
                                        <p>{feature.subheading}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animation-side">
                        <div className="floating-animation">
                            <dotlottie-wc
                                src="https://lottie.host/1766cc4c-65de-43ae-9293-983ff67c0d21/jzbb7ge8Ku.lottie"
                                style={{ width: '100%', maxWidth: '45rem', height: 'auto' }}
                                autoplay
                                loop
                            ></dotlottie-wc>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyVividSection;
