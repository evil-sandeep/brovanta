import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Users, X, Globe, Cpu, Megaphone, Target, Layout, Video, Calendar, Star, MessageSquare, Monitor, Camera } from 'lucide-react';
import './Hero.css';

const services = [
    { icon: <Globe size={24} />, title: "Website Development" },
    { icon: <Cpu size={24} />, title: "Application Development" },
    { icon: <Megaphone size={24} />, title: "Digital Marketing" },
    { icon: <Target size={24} />, title: "Leads Generation Market" },
    { icon: <Layout size={24} />, title: "Graphics Design" },
    { icon: <Video size={24} />, title: "Animation" },
    { icon: <Calendar size={24} />, title: "All Types of Events Work" },
    { icon: <Star size={24} />, title: "Brand Endorsement" },
    { icon: <Users size={24} />, title: "Celebrity & Influencer Marketing" },
    { icon: <MessageSquare size={24} />, title: "Media PR Service" },
    { icon: <Monitor size={24} />, title: "Post Production Service" }
];

const Hero = () => {
    const [showServices, setShowServices] = useState(false);

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
                        Building Smart Solutions Since 2023....
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hero-title"
                    >
                        BROVANTA INDUSTRY
                        <span>PRIVATE LIMITED.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-description"
                    >
                        Brovanta Industry is a next-generation ecosystem with 7 ventures, delivering end-to-end media, technology, and production solutions to shape the future of innovation.                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-btns"
                    >
                        <button className="btn-hero-primary" onClick={() => setShowServices(true)}>
                            Explore Services <ArrowRight size={20} />
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

            <AnimatePresence>
                {showServices && (
                    <div className="services-overlay-root">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="services-overlay"
                            onClick={() => setShowServices(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="services-modal"
                        >
                            <div className="modal-header">
                                <h2>Our Premium Services</h2>
                                <button className="modal-close" onClick={() => setShowServices(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="services-grid">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="service-card"
                                    >
                                        <div className="service-icon">
                                            {service.icon}
                                        </div>
                                        <h3>{service.title}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;


