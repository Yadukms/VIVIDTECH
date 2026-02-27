import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Subscribe To Our News</h2>
                    <p className="newsletter-description">
                        Receive Practical Updates On Cloud Technologies, Infrastructure
                        Strategies, Performance Optimization, And Emerging Digital
                        Solutions Shaping Modern Enterprises
                    </p>

                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <label htmlFor="email" className="input-label">Work Email</label>
                            <input
                                type="email"
                                id="email"
                                className="newsletter-input"
                                placeholder=""
                            />
                        </div>
                        <button type="submit" className="newsletter-submit">
                            Subscribe To News Letter
                        </button>
                    </form>
                </div>

                <div className="newsletter-visual">
                    <img src="/bg12.png" alt="Decorative background" className="newsletter-bg-img" />
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
