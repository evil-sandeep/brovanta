import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, Zap, Heart, X } from 'lucide-react';
import './About.css';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const features = [
        { title: "Innovative Design", desc: "Crafting unique digital experiences.", icon: <Zap size={20} /> },
        { title: "Secure Systems", desc: "Data protection and reliability first.", icon: <ShieldCheck size={20} /> },
        { title: "Client First", desc: "Dedicated support for your growth.", icon: <Heart size={20} /> },
    ];

    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-visual"
                >
                    <div className="about-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Team collaboration"
                            className="about-img"
                        />
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="experience-card"
                    >
                        <span className="num">3+</span>
                        <span className="text">Years of <br /> Excellence</span>
                    </motion.div>
                </motion.div>

                {/* Text Side */}
                <div className="about-content">
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        style={{ textAlign: 'left', marginBottom: '2rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Transforming Ideas into <br /> <span>Digital Reality</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.8' }}
                    >
                        At Brovanta Industry, we harness the power of technology to solve complex business challenges and drive meaningful growth. Our team of experienced professionals is passionate about delivering excellence, innovation, and reliable results.

                        From software development to media, broadcasting, and event production, Brovanta Industry offers end-to-end solutions under one ecosystem. We focus on building long-term partnerships by combining creativity, technology, and execution to turn ideas into impactful digital realities.
                    </motion.p>

                    <div className="about-list">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                className="about-list-item"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                            >
                                <div className="about-item-icon">
                                    {item.icon}
                                </div>
                                <div className="about-item-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Learn More About Us
                    </motion.button>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="about-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="about-modal-card"
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                                <X size={24} />
                            </button>

                            <div className="modal-content">
                                <h3 className="modal-title">About Brovanta Industry</h3>

                                <p>
                                    Brovanta Industry began as an MSME-registered enterprise with a focused vision to deliver value through technology-driven solutions. As the organization matured, it transitioned into Brovanta (OPC) Private Limited, strengthening its corporate structure and operational capabilities. Today, the company operates as Brovanta Industry Private Limited, reflecting its evolution into a scalable, partnership-led organization.
                                </p>

                                <p>
                                    This growth has been enabled by the continued trust of clients and stakeholders, along with the consistent performance and commitment of the Brovanta Industry team. Their collective expertise, discipline, and execution excellence have been instrumental in achieving the company’s current position.
                                </p>

                                <p>
                                    Brovanta Industry delivers end-to-end solutions across software development, media, broadcasting, and event production, operating as an integrated ecosystem. By combining technology, creativity, and strategic execution, the company supports organizations in addressing complex business challenges and achieving sustainable growth.
                                </p>

                                <p>
                                    With an expanding global footprint, Brovanta Industry now maintains a digital and operational presence in South Korea, Dubai–Sharjah, Austria, Sri Lanka, South Africa (Cape Town), and Canada (Toronto). This international expansion positions the company as an emerging multinational enterprise, committed to long-term partnerships, innovation, and global excellence.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;

