import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-blob blob-1" />
            <div className="hero-blob blob-2" />

            <div className="container hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-badge"
                    >
                        Startup of the Year 2025
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hero-title"
                    >
                        Empowering Your <br />
                        Digital <span>Future.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-description"
                    >
                        Brovanta is a next-generation ecosystem providing end-to-end solutions in media, tech, and production. We don't just build products; we build the future of innovation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-btns"
                    >
                        <button className="btn-hero-primary">
                            Explore Services <ArrowRight size={20} />
                        </button>
                        <button className="btn-hero-secondary">
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                background: 'rgba(0, 102, 255, 0.1)',
                                borderRadius: '50%',
                                color: 'var(--primary)',
                                marginRight: '10px'
                            }}>
                                <Play size={16} fill="currentColor" />
                            </span>
                            Watch Story
                        </button>
                    </motion.div>
                </div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hero-visual"
                >
                    <div className="image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Innovation Team"
                            className="hero-img"
                        />
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="floating-card card-1"
                    >
                        <div className="stats-circle circle-green">
                            <CheckCircle size={24} />
                        </div>
                        <div className="card-info">
                            <h4>99% Success</h4>
                            <p>Project Completion</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="floating-card card-2"
                    >
                        <div className="stats-circle circle-blue">
                            <Users size={24} />
                        </div>
                        <div className="card-info">
                            <h4>2.5k+ Clients</h4>
                            <p>Global Community</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

