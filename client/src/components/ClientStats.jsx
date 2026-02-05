import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Settings, Plus, Calendar, Users, CheckCircle, Code, Briefcase } from 'lucide-react';
import './ClientStats.css';

const statsConfig = [
    { key: "allEvents", label: "Global Events Completed", icon: <Calendar size={24} /> },
    { key: "brandsAssociates", label: "Strategic Brand Partners", icon: <Users size={24} /> },
    { key: "problemsSolved", label: "Business Problems Solved", icon: <CheckCircle size={24} /> },
    { key: "websitesCompleted", label: "Digital Solutions Delivered", icon: <Code size={24} /> },
    { key: "runningWork", label: "Active Project Streams", icon: <Briefcase size={24} /> },
];


const Counter = ({ to }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp = null;
        const duration = 2500;
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

    if (!stats) return (
        <div className="text-center py-10" style={{ color: 'var(--primary)', padding: '4rem 0' }}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                style={{ display: 'inline-block' }}
            >
                <Settings size={40} />
            </motion.div>
            <p style={{ marginTop: '1rem', fontWeight: 600 }}>Syncing Statistics...</p>
        </div>
    );

    return (
        <section className="stats-section">
            <button
                className="admin-toggle-btn"
                onClick={() => setIsAdmin(!isAdmin)}
                title="Admin Control"
            >
                <Settings size={20} />
            </button>

            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Impact
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Delivering Excellence at Scale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '1rem' }}
                    >
                        We measure our success by the growth of our partners. Here's a glimpse into the milestones we've achieved together.
                    </motion.p>
                </div>

                <div className="stats-grid">
                    {statsConfig.map((config, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="stat-icon-circle">
                                {config.icon}
                            </div>

                            <span className="stat-number">
                                <Counter to={stats[config.key]} />+
                            </span>
                            <p className="stat-label">
                                {config.label}
                            </p>

                            {isAdmin && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleIncrement(config.key); }}
                                    className="stat-increment-btn"
                                    title="Add 1"
                                >
                                    <Plus size={20} />
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ClientStats;

