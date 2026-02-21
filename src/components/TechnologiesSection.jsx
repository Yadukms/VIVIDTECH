import React from 'react';
import './TechnologiesSection.css';

const TechnologiesSection = () => {
    const row1Logos = [
        { src: '/pic1.png', alt: 'Tech 1' },
        { src: '/pic2.png', alt: 'Tech 2' },
        { src: '/pic3.png', alt: 'Tech 3' },
        { src: '/pic4.png', alt: 'Tech 4' },
        { src: '/pic5.png', alt: 'Tech 5' },
        { src: '/pic7.png', alt: 'Tech 7' },
        { src: '/pic8.png', alt: 'Tech 8' },
        { src: '/pic9.png', alt: 'Tech 9' },
    ];

    const row2Logos = [
        { src: '/pic10.jpg', alt: 'Tech 10' },
        { src: '/pic11.png', alt: 'Tech 11' },
        { src: '/pic12.png', alt: 'Tech 12' },
        { src: '/pic13.png', alt: 'Tech 13' },
        { src: '/pic14.png', alt: 'Tech 14' },
        { src: '/pic15.png', alt: 'Tech 15' },
        { src: '/pic16.png', alt: 'Tech 16' },
        { src: '/pic17.png', alt: 'Tech 17' },
        { src: '/pic18.png', alt: 'Tech 18' },
    ];

    // Helper to duplicate logos for seamless scrolling
    const renderLogos = (logos) => {
        const duplicated = [...logos, ...logos, ...logos, ...logos]; // Multiple copies to cover screen width
        return duplicated.map((logo, index) => (
            <div className="logo-card" key={index}>
                <img src={logo.src} alt={logo.alt} />
            </div>
        ));
    };

    return (
        <section className="technologies">
            <div className="technologies-container">
                <h2 className="technologies-title">Technologies We Deliver</h2>

                <div className="scroll-wrapper">
                    {/* Row 1: Left to Right */}
                    <div className="scroll-row ltr">
                        <div className="scroll-content">
                            {renderLogos(row1Logos)}
                        </div>
                    </div>

                    {/* Row 2: Right to Left */}
                    <div className="scroll-row rtl">
                        <div className="scroll-content">
                            {renderLogos(row2Logos)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
