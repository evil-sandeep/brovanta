import React from 'react';
import { Newspaper, ShoppingBag, Video, PlayCircle, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        title: "Zoom Chronicle",
        desc: "A live and growing media web portal delivering fresh stories, trends, and digital content — your lens into modern culture.",
        icon: <Newspaper size={32} color="white" />,
        isNew: false
    },
    {
        title: "Brovanta Style",
        desc: "Coming soon — our e-commerce platform launching by end of 2025, offering a curated selection of fashion and lifestyle products.",
        icon: <ShoppingBag size={32} color="white" />,
        isSoon: true
    },
    {
        title: "Zoomax Studio",
        desc: "Our in-house production studio for events, brand shoots, and creative media. Where imagination meets high-quality execution.",
        icon: <Video size={32} color="white" />,
        isNew: false
    },
    {
        title: "OTT Streaming",
        desc: "Launching soon — our upcoming OTT platform will bring entertainment and live content right to your screen.",
        icon: <PlayCircle size={32} color="white" />,
        isSoon: true
    },
    {
        title: "Software & IT",
        desc: "We design and develop custom web, app, and IT solutions that help businesses grow and innovate in the digital age.",
        icon: <Code size={32} color="white" />,
        isNew: false
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header">
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Services & Strategic Ventures
                    </motion.h2>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                        >
                            {service.isSoon && <span className="badge-soon">Coming Soon</span>}

                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>

                            <h3 className="service-title">{service.title}</h3>

                            <p className="service-description">
                                {service.desc}
                            </p>

                            <button className="service-btn">
                                Explore <ArrowRight size={16} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

