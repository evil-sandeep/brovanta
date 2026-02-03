import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="text-2xl font-bold text-primary" style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Brovanta
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8" style={{ display: 'none', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                            style={{ fontSize: '0.95rem', fontWeight: 500 }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{}} // handled by css class mostly, but adding explicit display check logic in CSS
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-white shadow-lg py-4 md:hidden"
                    style={{ position: 'absolute', top: '100%', left: 0, width: '100%', backgroundColor: 'white', padding: '1rem', boxShadow: 'var(--shadow-lg)' }}
                >
                    <div className="container flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block py-2 text-center font-medium hover:text-primary"
                                onClick={() => setIsOpen(false)}
                                style={{ display: 'block', padding: '0.5rem', textAlign: 'center' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Inline Styles for Responsive Logic (Since we are using Vanilla CSS but component specific logic here for clarity or we usually need media queries in CSS) */}
            <style>{`
                @media (min-width: 769px) {
                    nav.hidden { display: flex !important; }
                    button.md\\:hidden { display: none; }
                }
                @media (max-width: 768px) {
                    nav.hidden { display: none !important; }
                    button.md\\:hidden { display: block; }
                }
            `}</style>
        </header>
    );
};

export default Navbar;
