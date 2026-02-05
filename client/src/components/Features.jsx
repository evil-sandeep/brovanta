import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Award } from 'lucide-react';
import './Features.css';

const features = [
    { icon: <Zap size={32} />, title: "Agile Methodology", desc: "We adapt quickly to changes and deliver innovative solutions with speed and precision." },
    { icon: <Users size={32} />, title: "Expert Team", desc: "A diverse team of seasoned professionals dedicated to your success." },
    { icon: <Award size={32} />, title: "Quality Guaranteed", desc: "We adhere to the highest standards of quality and performance in every project." },
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        The Brovanta Advantage
                    </motion.h2>
                </div>

                <div className="grid grid-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <div className="feature-icon-box">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

