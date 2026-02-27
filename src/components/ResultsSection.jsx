import React, { useState } from 'react';
import './ResultsSection.css';

const ResultsSection = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <section
            className={`transitional-cta ${isRevealed ? 'revealed' : ''}`}
            onClick={() => setIsRevealed(!isRevealed)}
        >
            {/* Snake Staircase (Initial State) */}
            <div className="snake-staircase">
                <div className="snake-block s-1"></div>
                <div className="snake-block s-2"></div>
                <div className="snake-block s-3"></div>
                <div className="snake-block s-4"></div>
                <div className="snake-block s-5"></div>
            </div>

            {/* Top-Left Corner (Revealed State) */}
            <div className="staircase-tl">
                <div className="block block-3"></div>
                <div className="block block-2"></div>
                <div className="block block-1"></div>
            </div>

            <div className="cta-content-container">
                <h2 className="cta-headline">
                    Vivid Tech Solutions Delivers<br />
                    Secure, Scalable, And Resilient<br />
                    Technology & Cloud Services<br />
                    Designed For Modern Enterprises
                </h2>
            </div>

            {/* Bottom-Right Corner (Revealed State) */}
            <div className="staircase-br">
                <div className="block block-1"></div>
                <div className="block block-2"></div>
                <div className="block block-3"></div>
            </div>
        </section>
    );
};

export default ResultsSection;
