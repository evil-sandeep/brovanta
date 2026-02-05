import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Heart } from 'lucide-react';
import './About.css';

const About = () => {
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
                        <span className="num">5+</span>
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
                        At Brovanta, we believe in the power of technology to solve complex business challenges. Our team is composed of industry experts who are passionate about delivering excellence and building long-term partnerships.
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
                    >
                        Learn More About Us
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default About;

