import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Settings, Plus } from 'lucide-react';

const statsConfig = [
    { key: "allEvents", label: "All Type Events Done" },
    { key: "brandsAssociates", label: "Brands Associate for Brands Endorsement" },
    { key: "problemsSolved", label: "Problem Solved" },
    { key: "websitesCompleted", label: "Website & Application Work Complete" },
    { key: "runningWork", label: "Work is Running" },
];

const Counter = ({ to }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Use current count as 'from' value for seamless updates
    useEffect(() => {
        if (!isInView) return;

        let startTimestamp = null;
        const duration = 2000;
        const from = count;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * (to - from) + from));
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }, [isInView, to]);

    return <span ref={ref}>{count}</span>;
};

const ClientStats = () => {
    const [stats, setStats] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const fetchStats = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/stats');
            const data = await res.json();
            setStats(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    const handleIncrement = async (key) => {
        try {
            const res = await fetch('http://localhost:5000/api/stats/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key })
            });
            const updatedStats = await res.json();
            setStats(updatedStats);
        } catch (err) {
            console.error(err);
        }
    };

    if (!stats) return <div className="text-center py-10" style={{ color: 'var(--primary)' }}>Loading Stats...</div>;

    return (
        <section className="section" style={{ padding: '4rem 0', position: 'relative' }}>
            {/* Admin Toggle */}
            <div
                onClick={() => setIsAdmin(!isAdmin)}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    cursor: 'pointer',
                    opacity: 0.3,
                    transition: 'opacity 0.2s',
                    zIndex: 10
                }}
                className="hover:opacity-100"
                title="Toggle Admin Mode"
            >
                <Settings size={20} color="var(--text-muted)" />
            </div>

            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Client Work</h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Our company has successfully delivered projects across various sectors, showcasing our versatility and commitment to excellence in every domain we serve.
                    </p>
                </div>

                <div className="grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    justifyContent: 'center'
                }}>
                    {statsConfig.map((config, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                                borderRadius: '1rem',
                                padding: '2rem 1rem',
                                textAlign: 'center',
                                color: 'white',
                                boxShadow: 'var(--shadow-md)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '180px',
                                position: 'relative'
                            }}
                        >
                            <h3 style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                marginBottom: '0.5rem',
                                lineHeight: '1'
                            }}>
                                <Counter to={stats[config.key]} />+
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                lineHeight: '1.4',
                                opacity: 0.9
                            }}>
                                {config.label}
                            </p>

                            {/* Admin Button */}
                            {isAdmin && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleIncrement(config.key); }}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'rgba(255,255,255,0.2)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        transition: 'background 0.2s'
                                    }}
                                    className="admin-btn"
                                    title="Add +1"
                                >
                                    <Plus size={16} />
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .admin-btn:hover {
                    background: rgba(255,255,255,0.4) !important;
                }
                .hover\\:opacity-100:hover {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};

export default ClientStats;
