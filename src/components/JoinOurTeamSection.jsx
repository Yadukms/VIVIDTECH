import React from 'react';
import { Rocket, Users, TrendingUp } from 'lucide-react';
import './JoinOurTeamSection.css';

const JoinOurTeamSection = () => {
    const values = [
        {
            icon: <Rocket size={48} className="value-icon" />,
            title: "Exciting Projects",
            description: "Work on cutting-edge technologies and challenging projects"
        },
        {
            icon: <Users size={48} className="value-icon" />,
            title: "Great Team",
            description: "Work on cutting-edge technologies and challenging projects"
        },
        {
            icon: <TrendingUp size={48} className="value-icon" />,
            title: "Career Growth",
            description: "Work on cutting-edge technologies and challenging projects"
        }
    ];

    return (
        <section className="join-team">
            <div className="join-container">
                <div className="join-header">
                    <h2 className="join-title">Join Our Team</h2>
                    <p className="join-subtitle">
                        Be part of an innovative team that's shaping the future of technology
                    </p>
                </div>

                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <div className="icon-wrapper">
                                {value.icon}
                            </div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-description">{value.description}</p>
                        </div>
                    ))}
                </div>

                <div className="impact-banner">
                    <div className="banner-content">
                        <h2 className="banner-title">Ready To Make An Impact</h2>
                        <p className="banner-subtitle">
                            Explore open positions and start your journey with VividTech Solutions
                        </p>
                        <button className="positions-btn">View Open Positions</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinOurTeamSection;
