import React from 'react';

const projects = [
    { title: "FinTech Dashboard", category: "Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "E-Commerce Platform", category: "Development", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Corporate Branding", category: "Design", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "HealthCare App", category: "Mobile", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const Work = () => {
    return (
        <section id="work" className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
            <div className="container">
                <span className="section-subtitle">Our Portfolio</span>
                <h2 className="section-title">Recent Case Studies</h2>

                <div className="grid grid-2" style={{ marginTop: '3rem' }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                borderRadius: 'var(--radius)',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-md)',
                                group: 'project-card'
                            }}
                            className="group"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                className="project-img"
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                padding: '2rem 1.5rem',
                                color: 'white'
                            }}>
                                <span style={{ fontSize: '0.8rem', opacity: 0.9, textTransform: 'uppercase' }}>{project.category}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Simple hover scale effect using text/style block for "group" behavior since we aren't using Tailwind fully */}
                <style>{`
            .group:hover .project-img {
                transform: scale(1.05);
            }
        `}</style>

            </div>
        </section>
    );
};

export default Work;
