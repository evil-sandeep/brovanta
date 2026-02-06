import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="footer-brand"
                    >
                        <h2>Brovanta</h2>
                        <p>
                            Empowering businesses with innovative digital solutions. Building the future of technology one project at a time.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="footer-column"
                    >
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home"><ChevronRight size={16} /> Home</a></li>
                            <li><a href="#services"><ChevronRight size={16} /> Services</a></li>
                            <li><a href="#work"><ChevronRight size={16} /> Portfolio</a></li>
                            <li><a href="#about"><ChevronRight size={16} /> About Us</a></li>
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="footer-column"
                    >
                        <h3>Services</h3>
                        <ul className="footer-links">
                            <li><a href="#services"><ChevronRight size={16} /> Web Development</a></li>
                            <li><a href="#services"><ChevronRight size={16} /> App Solutions</a></li>
                            <li><a href="#services"><ChevronRight size={16} /> UI/UX Design</a></li>
                            <li><a href="#services"><ChevronRight size={16} /> Cloud Services</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="footer-column"
                    >
                        <h3>Contact Info</h3>
                        <div className="footer-contact-item">
                            <MapPin size={20} className="contact-icon" />
                            <span>city,state</span>
                        </div>
                        <div className="footer-contact-item">
                            <Mail size={20} className="contact-icon" />
                            <span>contact@brovanta.com</span>
                        </div>
                        <div className="footer-contact-item">
                            <Phone size={20} className="contact-icon" />
                            <span>+91 1111111111</span>
                        </div>
                    </motion.div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Brovanta Private Limited. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

