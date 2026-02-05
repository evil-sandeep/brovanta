import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, Calendar, Users, CheckCircle, Code, Briefcase, Plus, Minus, Check, AlertCircle } from 'lucide-react';
import './UpdateWork.css';

const ADMIN_KEY = 'brovanta_admin_2024_secure';

function UpdateWork() {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [loading, setLoading] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [confirmationInput, setConfirmationInput] = useState('');
    const [confirmationError, setConfirmationError] = useState('');

    useEffect(() => {
        const metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        metaRobots.content = 'noindex, nofollow';
        document.head.appendChild(metaRobots);
        document.title = 'Internal Admin Panel | Brovanta';
        return () => document.head.removeChild(metaRobots);
    }, []);

    const handleConfirmation = (e) => {
        e.preventDefault();
        if (confirmationInput.toUpperCase() === 'SANDEEP2274') {
            setIsAuthorized(true);
            setConfirmationError('');
        } else {
            setConfirmationError('Invalid Secret Code. Access denied.');
            setConfirmationInput('');
        }
    };

    const handleUpdate = async (statKey, statName, action = 'increment') => {
        setLoading(`${statKey}-${action}`);
        setMessage('');

        try {
            const response = await fetch('http://localhost:5000/api/admin/stats/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'SANDEEP2274': ADMIN_KEY,
                },
                body: JSON.stringify({ key: statKey, action }),
            });

            if (!response.ok) throw new Error('Update failed');

            setMessage(`${statName} updated successfully`);
            setMessageType('success');
            setTimeout(() => setMessage(''), 4000);
        } catch (error) {
            setMessage(`Failed to update ${statName}`);
            setMessageType('error');
            setTimeout(() => setMessage(''), 4000);
        } finally {
            setLoading(null);
        }
    };

    const stats = [
        { id: 1, name: 'Global Events', key: 'allEvents', icon: <Calendar size={28} /> },
        { id: 2, name: 'Brand Partners', key: 'brandsAssociates', icon: <Users size={28} /> },
        { id: 3, name: 'Problems Solved', key: 'problemsSolved', icon: <CheckCircle size={28} /> },
        { id: 4, name: 'Digital Solutions', key: 'websitesCompleted', icon: <Code size={28} /> },
        { id: 5, name: 'Active Streams', key: 'runningWork', icon: <Briefcase size={28} /> }
    ];

    if (!isAuthorized) {
        return (
            <div className="update-work-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="confirmation-box"
                >
                    <div className="admin-lock-icon">
                        <Lock size={40} />
                    </div>
                    <h1 className="confirmation-title">Admin Authorization</h1>
                    <p className="confirmation-instruction">Please enter the master security key to access the internal control panel.</p>

                    <form onSubmit={handleConfirmation}>
                        <input
                            type="password"
                            value={confirmationInput}
                            onChange={(e) => setConfirmationInput(e.target.value)}
                            placeholder="Master Key"
                            className="confirmation-input"
                            autoFocus
                        />
                        <motion.button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '1.25rem' }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Authorize Access
                        </motion.button>
                    </form>

                    {confirmationError && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="confirmation-error"
                        >
                            {confirmationError}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        );
    }

    return (
        <div className="update-work-container">
            <AnimatePresence>
                {message && (
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={`admin-message ${messageType}`}
                    >
                        {messageType === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="update-work-content">
                <header className="admin-header">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="update-work-title"
                    >
                        Internal Control Center
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="update-work-warning"
                    >
                        System Management & Statistics
                    </motion.p>
                </header>

                <div className="admin-stats-flex">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.id}
                            className="admin-stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                        >
                            <div className="admin-stat-icon-box">
                                {stat.icon}
                            </div>
                            <h3 className="admin-stat-name">{stat.name}</h3>
                            <div className="admin-actions">
                                <motion.button
                                    className="btn-admin dec"
                                    onClick={() => handleUpdate(stat.key, stat.name, 'decrement')}
                                    disabled={loading === `${stat.key}-increment` || loading === `${stat.key}-decrement`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Minus size={20} />
                                </motion.button>
                                <motion.button
                                    className="btn-admin inc"
                                    onClick={() => handleUpdate(stat.key, stat.name, 'increment')}
                                    disabled={loading === `${stat.key}-increment` || loading === `${stat.key}-decrement`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {loading === `${stat.key}-increment` ? '...' : <Plus size={20} />}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UpdateWork;

