import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './SolutionsSection.css';

const SolutionsSection = () => {
    const projects = [
        {
            id: 1,
            title: "Cloud Infrastructure Modernization",
            img: "/bg5.png",
            showOverlay: true
        },
        {
            id: 2,
            title: "Enterprise Network Optimization",
            img: "/bg6.jpg",
            showOverlay: false
        },
        {
            id: 3,
            title: "Performance & Reliability Engineering",
            img: "/bg7.png",
            showOverlay: false
        },
        {
            id: 4,
            title: "Hybrid Cloud Deployment Strategy",
            img: "/bg8.png",
            showOverlay: false
        }
    ];

    return (
        <section className="solutions-portfolio" id="solutions">
            <div className="portfolio-container">
                {/* Header Content */}
                <div className="portfolio-header">
                    <h2 className="portfolio-title">
                        Explore Our Range Of Delivered<br />
                        Technology & Infrastructure<br />
                        Solutions
                    </h2>
                    <p className="portfolio-subtitle">
                        Structured Implementations, Cloud Transformations, And Infrastructure Modernization<br />
                        Initiatives Designed To Enhance Performance, Resilience, And Scalability
                    </p>
                    <button className="view-solutions-btn">View Solutions</button>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-box">
                                <img src={project.img} alt={project.title} className="project-img" />
                                <div className="project-overlay">
                                    <button className="view-project-btn">View Project</button>
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="portfolio-navigation">
                    <button className="nav-btn prev">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="nav-btn next">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
