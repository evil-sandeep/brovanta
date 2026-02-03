import React from 'react';
import { Code, Newspaper, ShoppingBag, Video, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ventures = [
    {
        title: "Software & IT Solutions",
        status: "ACTIVE",
        desc: "At our core, Brovanta (OPC) Private Limited also specializes in software development and IT-related services, empowering businesses with custom solutions to scale and succeed.",
        icon: <Code size={32} color="white" />
    },
    {
        title: "Zoom Chronicle",
        status: "ACTIVE",
        desc: "A growing media web portal currently live and active, delivering stories, updates, and digital content with a fresh perspective. It's your window into trends, lifestyle, and beyond.",
        icon: <Newspaper size={32} color="white" />
    },
    {
        title: "Brovanta Style",
        status: "COMING-SOON",
        desc: "Our soon-to-be-launched e-commerce platform, scheduled before the end of 2025, will offer a curated range of products and styles to redefine your shopping experience.",
        icon: <ShoppingBag size={32} color="white" />
    },
    {
        title: "Zoomax Studio",
        status: "ACTIVE",
        desc: "Our in-house production unit dedicated to event shoots, brand endorsements, and high-quality media production. Zoomax Studio reflects our creative spirit and technical prowess.",
        icon: <Video size={32} color="white" />
    },
    {
        title: "OTT Live Streaming App",
        status: "COMING-SOON",
        desc: "Launching soon, our upcoming OTT platform will bring entertainment and live streaming content to your fingertips — stay tuned as we step into the future of digital media.",
        icon: <PlayCircle size={32} color="white" />
    }
];

const Ventures = () => {
    return (
        <section id="ventures" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2 className="section-title">Our Ventures</h2>
                <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Under the Brovanta umbrella, we are building multiple ventures designed to serve customers with quality, convenience, and trust:
                </p>

                <div className="grid grid-3">
                    {ventures.map((venture, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: 'var(--radius)',
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid var(--border-light)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                letterSpacing: '0.05em',
                                backgroundColor: venture.status === 'ACTIVE' ? '#dcfce7' : '#ffedd5',
                                color: venture.status === 'ACTIVE' ? '#15803d' : '#c2410c',
                            }}>
                                {venture.status}
                            </div>

                            <div style={{
                                marginBottom: '1.5rem',
                                background: 'var(--primary)',
                                width: '64px',
                                height: '64px',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 6px -1px rgba(0, 102, 255, 0.3)'
                            }}>
                                {venture.icon}
                            </div>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>{venture.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>
                                {venture.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ventures;
