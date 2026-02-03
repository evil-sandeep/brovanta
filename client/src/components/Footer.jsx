import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid grid-3" style={{ marginBottom: '3rem' }}>

                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Brovanta</h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6, maxWidth: '300px' }}>
                            Empowering businesses with innovative digital solutions. Building the future, together.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94a3b8' }}>
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Follow Us</h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}><Facebook size={20} /></a>
                            <a href="#" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}><Twitter size={20} /></a>
                            <a href="#" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}><Linkedin size={20} /></a>
                            <a href="#" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}><Instagram size={20} /></a>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#64748b' }}>
                    &copy; {new Date().getFullYear()} Brovanta (OPC) Private Limited. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
