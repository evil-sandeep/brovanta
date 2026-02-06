import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import './Work.css';

const successStories = [
    {
        id: 1,
        title: "Digital Transformation for FinTech Leader",
        category: "FinTech",
        date: "Jan 24, 2026",
        summary: "How we helped a leading legacy bank modernize its core infrastructure, resulting in a 40% reduction in processing times and seamless mobile banking for millions.",
        img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "Scalable E-Commerce Growth Engine",
        category: "E-Commerce",
        date: "Dec 10, 2025",
        summary: "Implementing an AI-driven recommendation engine that boosted average order value by 25% and personalized the shopping journey for over 500k users.",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "Cloud Migration & Cost Optimization",
        category: "Cloud Infrastructure",
        date: "Nov 05, 2025",
        summary: "A strategic migration to a hybrid cloud architecture that improved system uptime to 99.99% while reducing operational infrastructure costs by 30%.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 4,
        title: "Smart Healthcare Patient Portal",
        category: "Healthcare",
        date: "Oct 18, 2025",
        summary: "Developing a secure, HIPAA-compliant mobile portal that streamlined patient-doctor communication and simplified appointment scheduling.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 5,
        title: "Event Tech: Real-Time Engagement",
        category: "Event Tech",
        date: "Sep 22, 2025",
        summary: "Creating an immersive event platform with real-time polling and networking features, enhancing attendee engagement for a global virtual conference.",
        img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
];

const Work = () => {
    return (
        <section id="work" className="work-section">
            <div className="container">
                <div className="work-header">
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
                        Blogs
                    </motion.h2>
                    <motion.p
                        className="section-desc"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Discover how Brovanta Industry collaborates with visionary organizations to drive growth, innovation, and digital excellence.
                    </motion.p>
                </div>

                <div className="blog-grid">
                    {successStories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="blog-img-wrapper">
                                <img src={story.img} alt={story.title} className="blog-img" />
                                <div className="blog-category">
                                    <TrendingUp size={14} style={{ marginRight: '6px' }} />
                                    {story.category}
                                </div>
                            </div>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Calendar size={14} className="meta-icon" />
                                    <span>{story.date}</span>
                                </div>
                                <h3 className="blog-title">{story.title}</h3>
                                <p className="blog-summary">{story.summary}</p>

                                <a href="#contact" className="blog-link">
                                    Read Case Study <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
