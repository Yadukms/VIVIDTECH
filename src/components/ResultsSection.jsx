import React, { useState, useEffect, useRef } from 'react';
import './ResultsSection.css';

const Counter = ({ end, duration, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const totalFrames = Math.round(duration / 16); // 60fps approx
        const increment = end / totalFrames;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return (
        <span ref={counterRef} className="counter-number">
            {count}{suffix}
        </span>
    );
};

const ResultsSection = () => {
    const stats = [
        { label: "Expert Hands", value: 80, suffix: "+" },
        { label: "Project Done", value: 300, suffix: "+" },
        { label: "Happy Clients", value: 250, suffix: "+" }
    ];

    return (
        <section className="results-section">
            <div className="results-container">
                <h2 className="results-title">Proven Excellence & Tangible Results</h2>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
