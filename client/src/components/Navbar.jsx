import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

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
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <motion.a
                    href="#"
                    className="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                >
                    Brovanta<span className="logo-dot"></span>
                </motion.a>

                {/* Desktop Menu */}
                <nav className="nav-links">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                <div className="nav-actions">
                    <motion.a
                        href="#contact"
                        className="btn-contact"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-overlay"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button
                            className="absolute top-8 right-8 p-2"
                            onClick={() => setIsOpen(false)}
                            style={{ position: 'absolute', top: '2rem', right: '2rem' }}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.concat({ name: 'Contact', href: '#contact' }).map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                variants={linkVariants}
                                onClick={() => setIsOpen(false)}
                                whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

