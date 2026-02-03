import React from 'react';
import { Zap, Users, Award } from 'lucide-react';

const features = [
    { icon: <Zap size={40} />, title: "Agile Methodology", desc: "We adapt quickly to changes and deliver innovative solutions with speed and precision." },
    { icon: <Users size={40} />, title: "Expert Team", desc: "A diverse team of seasoned professionals dedicated to your success." },
    { icon: <Award size={40} />, title: "Quality Guaranteed", desc: "We adhere to the highest standards of quality and performance in every project." },
];

const Features = () => {
    return (
        <section className="section">
            <div className="container text-center">
                <span className="section-subtitle">Why Choose Us</span>
                <h2 className="section-title">The Brovanta Advantage</h2>

                <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{
                                margin: '0 auto 1.5rem',
                                background: '#eff6ff',
                                color: 'var(--primary)',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
