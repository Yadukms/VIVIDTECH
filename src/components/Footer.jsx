import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">VividTech</h2>
                        <div className="social-links">
                            <a href="#" className="social-icon twitter"><Twitter size={20} /></a>
                            <a href="#" className="social-icon instagram"><Instagram size={20} /></a>
                            <a href="#" className="social-icon youtube"><Youtube size={20} /></a>
                            <a href="#" className="social-icon linkedin"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-columns">
                        <div className="footer-column">
                            <h3>Contact Us</h3>
                            <a href="tel:+971551176810" className="contact-link">+971 551176810</a>
                        </div>

                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Technologies</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms Of Service</a></li>
                                <li><a href="#">Compilance</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="copyright">© 2026 VividTech Solutions. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
