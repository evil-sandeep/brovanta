import React from 'react';
import { Newspaper, ShoppingBag, Video, PlayCircle, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Zoom Chronicle",
        desc: "A live and growing media web portal delivering fresh stories, trends, and digital content — your lens into modern culture.",
        icon: <Newspaper size={32} color="white" />
    },
    {
        title: "Brovanta Style",
        desc: "Coming soon — our e-commerce platform launching by end of 2025, offering a curated selection of fashion and lifestyle products to elevate your shopping experience.",
        icon: <ShoppingBag size={32} color="white" />
    },
    {
        title: "Zoomax Studio",
        desc: "Our in-house production studio for events, brand shoots, and creative media. Where imagination meets high-quality execution.",
        icon: <Video size={32} color="white" />
    },
    {
        title: "OTT Live Streaming App",
        desc: "Launching soon — our upcoming OTT platform will bring entertainment and live content right to your screen. Stay tuned for the future of streaming.",
        icon: <PlayCircle size={32} color="white" />
    },
    {
        title: "Software & IT Solutions",
        desc: "We design and develop custom web, app, and IT solutions that help businesses grow and innovate in the digital age.",
        icon: <Code size={32} color="white" />
    },
];

const Services = () => {
    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
            <div className="container">
                <span className="section-subtitle">What We Do</span>
                <h2 className="section-title">Our Services & Ventures</h2>

                <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="service-card"
                            style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: 'var(--radius)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--border-light)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', // Center align content
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                marginBottom: '1.5rem',
                                background: 'var(--primary)',
                                width: '72px',
                                height: '72px',
                                borderRadius: '50%', // Circle shape as per image
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 10px rgba(0, 102, 255, 0.3)'
                            }}>
                                {service.icon}
                            </div>

                            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>

                            <p style={{
                                color: 'var(--text-muted)',
                                marginBottom: '2rem', // Space for button
                                lineHeight: '1.6',
                                flexGrow: 1
                            }}>
                                {service.desc}
                            </p>

                            <button className="btn btn-primary" style={{ width: '100%', maxWidth: '200px' }}>
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
