import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    {/* Left Section: CTA */}
                    <div className="footer-cta">
                        <h2 className="footer-headline">
                            Ready To Strengthen Your Technology Infrastructure?
                        </h2>
                        <button className="footer-contact-btn">
                            Contact Us
                        </button>
                    </div>

                    {/* Right Section: Locations */}
                    <div className="footer-locations">
                        <div className="location-col">
                            <h3 className="location-title">Vivid Tech Solutions Pvt. Ltd.</h3>
                            <p className="location-address">
                                4/461, 2nd Floor Valamkottil Towers<br />
                                Ernakulam, Kerala, India, 682021
                            </p>
                        </div>

                        <div className="location-col">
                            <h3 className="location-title">Vivid Tech Solutions Pvt. Ltd.</h3>
                            <p className="location-address">
                                501-034, 5th Floor, Espada Business Center,<br />
                                Al Barsha 1, Dubai, UAE
                            </p>
                        </div>

                        <div className="location-col">
                            <h3 className="location-title">Vivid Tech Solutions Pvt. Ltd.</h3>
                            <p className="location-address">
                                75 Windsor Road Northmead 2152, NSW Australia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Contact & Socials */}
                <div className="footer-bottom-bar">
                    <div className="footer-contact-info">
                        <Mail size={18} className="contact-icon" />
                        <a href="mailto:Contact@Vividtechsolutions.Com" className="footer-email">
                            Contact@Vividtechsolutions.Com
                        </a>
                    </div>

                    <div className="footer-socials">
                        <a href="#" className="social-icon-circle"><Linkedin size={18} /></a>
                        <a href="#" className="social-icon-circle"><Instagram size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
