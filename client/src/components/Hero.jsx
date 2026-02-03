import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{
            background: 'linear-gradient(135deg, #e0f2fe 0%, #fff 100%)', // Very soft blue to white
            paddingTop: '8rem',
            paddingBottom: '5rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Blur */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'rgba(0, 102, 255, 0.1)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div className="container grid grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        color: 'var(--primary)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Driven by Passion, Powered by Innovation
                    </span>
                    <h1 style={{
                        fontSize: '3.5rem',
                        lineHeight: '1.2',
                        fontWeight: '800',
                        color: 'var(--text-main)',
                        marginBottom: '1.5rem'
                    }}>
                        Welcome to the <br />
                        <span style={{ color: 'var(--primary)' }}>Brovanta Family!</span>
                    </h1>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '90%'
                    }}>
                        Brovanta is more than just a company — it's a growing ecosystem built to provide end-to-end solutions across diverse domains. We are a dynamic startup driven by excellence.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            Explore Services <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <PlayCircle size={18} /> Learn More
                        </button>
                    </div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto'
                    }}>
                        {/* Using a reliable placeholder for now, demonstrating structure */}
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Professional Business Person"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '2rem',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        />

                        {/* Floating Card Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                left: '-5%',
                                background: 'white',
                                padding: '1rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                            <div style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%' }} />
                            <div>
                                <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>24/7 Support</p>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Always online</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
