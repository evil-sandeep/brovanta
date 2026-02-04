import React, { useState, useEffect } from 'react';
import './UpdateWork.css';

const ADMIN_KEY = 'brovanta_admin_2024_secure'; // Secret admin key

function UpdateWork() {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [loading, setLoading] = useState(null); // Track which button is loading
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [confirmationInput, setConfirmationInput] = useState('');
    const [confirmationError, setConfirmationError] = useState('');

    // Block search engines from indexing this page
    useEffect(() => {
        // Add meta tags to prevent indexing
        const metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        metaRobots.content = 'noindex, nofollow';
        document.head.appendChild(metaRobots);

        // Set page title
        document.title = 'Internal Admin Panel';

        return () => {
            // Cleanup meta tag on unmount
            document.head.removeChild(metaRobots);
        };
    }, []);

    const handleConfirmation = (e) => {
        e.preventDefault();

        if (confirmationInput.toUpperCase() === 'SANDEEP2274') {
            setIsAuthorized(true);
            setConfirmationError('');
        } else {
            setConfirmationError('Please enter Scret Code to continue');
            setConfirmationInput('');
        }
    };

    const handleUpdate = async (statKey, statName, action = 'increment') => {
        const actionText = action === 'increment' ? 'increase' : 'decrease';
        if (!window.confirm(`Are you sure you want to ${actionText} ${statName}?`)) {
            return;
        }

        setLoading(`${statKey}-${action}`);
        setMessage('');

        try {
            const response = await fetch('http://localhost:5000/api/admin/stats/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'SANDEEP2274': ADMIN_KEY, // Admin key header
                },
                body: JSON.stringify({ key: statKey, action }),
            });

            if (!response.ok) {
                throw new Error('Failed to update stat');
            }

            const data = await response.json();
            setMessage(`✓ ${statName} ${action === 'increment' ? 'increased' : 'decreased'} successfully`);
            setMessageType('success');

            // Clear message after 3 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 3000);
        } catch (error) {
            console.error('Error updating stat:', error);
            setMessage(`✗ Failed to update ${statName}`);
            setMessageType('error');

            // Clear error message after 3 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 3000);
        } finally {
            setLoading(null);
        }
    };

    const stats = [
        { id: 1, name: 'All Type Events Done', key: 'allEvents' },
        { id: 2, name: 'Brands Associate for Brands Endorsement', key: 'brandsAssociates' },
        { id: 3, name: 'Problems Solved', key: 'problemsSolved' },
        { id: 4, name: 'Website & Application Work Complete', key: 'websitesCompleted' },
        { id: 5, name: 'Work is Running', key: 'runningWork' }
    ];

    // Show confirmation screen if not authorized
    if (!isAuthorized) {
        return (
            <div className="update-work-container">
                <div className="confirmation-box">
                    <div className="lock-icon">🔒</div>
                    <h1 className="confirmation-title">Access Confirmation Required</h1>
                    <p className="confirmation-text">This is a restricted admin area.</p>
                    <p className="confirmation-instruction">Enter <strong>Scret Code</strong> to continue</p>

                    <form onSubmit={handleConfirmation} className="confirmation-form">
                        <input
                            type="text"
                            value={confirmationInput}
                            onChange={(e) => setConfirmationInput(e.target.value)}
                            placeholder="Enter Scret Code"
                            className="confirmation-input"
                            autoFocus
                        />
                        <button type="submit" className="confirmation-btn">
                            Continue
                        </button>
                    </form>

                    {confirmationError && (
                        <div className="confirmation-error">
                            {confirmationError}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Show main admin panel if authorized
    return (
        <div className="update-work-container">
            <div className="update-work-content">
                <h1 className="update-work-title">Internal Stats Update Panel</h1>
                <p className="update-work-warning">For internal use only</p>

                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}

                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="stat-card">
                            <h3 className="stat-name">{stat.name}</h3>
                            <div className="stat-actions">
                                <button
                                    className="increment-btn"
                                    onClick={() => handleUpdate(stat.key, stat.name, 'increment')}
                                    disabled={loading === `${stat.key}-increment` || loading === `${stat.key}-decrement`}
                                >
                                    {loading === `${stat.key}-increment` ? '...' : '+1'}
                                </button>
                                <button
                                    className="decrement-btn"
                                    onClick={() => handleUpdate(stat.key, stat.name, 'decrement')}
                                    disabled={loading === `${stat.key}-increment` || loading === `${stat.key}-decrement`}
                                >
                                    {loading === `${stat.key}-decrement` ? '...' : '-1'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UpdateWork;
