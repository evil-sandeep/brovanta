import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <span className="section-subtitle">Get In Touch</span>
                <h2 className="section-title">Let's Start a Conversation</h2>

                <div className="grid grid-2" style={{ marginTop: '3rem', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            have a project in mind or want to learn more about our services? Reach out to us anytime.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { icon: <Mail color="var(--primary)" />, text: "hello@brovanta.com" },
                                { icon: <Phone color="var(--primary)" />, text: "+1 (555) 123-4567" },
                                { icon: <MapPin color="var(--primary)" />, text: "123 Business Ave, Tech City, USA" }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.75rem', background: 'var(--secondary)', borderRadius: '50%' }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ fontWeight: '500' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <form style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid var(--border-light)'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={inputStyle} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input type="email" placeholder="Your Email" style={inputStyle} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea rows="4" placeholder="How can we help?" style={inputStyle}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '0.875rem',
    borderRadius: '0.5rem',
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
};

export default Contact;
