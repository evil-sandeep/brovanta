import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Work.css';

const projects = [
    { title: "FinTech Dashboard", category: "Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { title: "E-Commerce Platform", category: "Development", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { title: "Corporate Branding", category: "Design", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { title: "HealthCare App", category: "Mobile", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
];

const Work = () => {
    return (
        <section id="work" className="work-section">
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Selected Portfolio Work
                    </motion.h2>
                </div>

                <div className="work-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="work-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="work-img-wrapper">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="work-img"
                                />
                            </div>

                            <div className="work-overlay">
                                <span className="work-category">{project.category}</span>
                                <h3 className="work-title">{project.title}</h3>
                            </div>

                            <div className="work-view-btn">
                                <ArrowUpRight size={24} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

