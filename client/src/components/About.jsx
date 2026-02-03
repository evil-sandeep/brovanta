import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container grid grid-2" style={{ alignItems: 'center' }}>

                {/* Image Side */}
                <div style={{ position: 'relative' }}>
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Team collaboration"
                        style={{
                            width: '100%',
                            borderRadius: 'var(--radius)',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '-2rem',
                        right: '-2rem',
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '2rem',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'none', // Hidden on mobile via CSS ideally, but simplified here
                    }} className="experience-badge">
                        <span style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block', lineHeight: 1 }}>5+</span>
                        <span style={{ fontSize: '0.9rem' }}>Years Experience</span>
                    </div>
                    {/* Simple css fix for the badge display */}
                    <style>{`
             @media(min-width: 768px) { .experience-badge { display: block !important; } }
           `}</style>
                </div>

                {/* Text Side */}
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="section-subtitle" style={{ textAlign: 'left' }}>About Us</span>
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        Transforming Ideas into <br /> Digital Reality
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        At Brovanta, we believe in the power of technology to solve complex business challenges. Our team is composed of industry experts who are passionate about delivering excellence.
                    </p>

                    <ul style={{ marginBottom: '2rem' }}>
                        {[
                            "Innovative Solutions for Modern Problems",
                            "Client-Centric Approach & Dedicated Support",
                            "Highly Skilled Cross-functional Team"
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                                <CheckCircle size={20} color="var(--primary)" /> {item}
                            </li>
                        ))}
                    </ul>

                    <button className="btn btn-primary">Discover More</button>
                </div>

            </div>
        </section>
    );
};

export default About;
