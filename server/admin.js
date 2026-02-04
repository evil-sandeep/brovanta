const express = require('express');
const router = express.Router();

// Admin key for validation
const ADMIN_KEY = 'brovanta_admin_2024_secure';

// Middleware to validate admin key
const validateAdminKey = (req, res, next) => {
    const adminKey = req.headers['sandeep2274'];

    if (adminKey !== ADMIN_KEY) {
        return res.status(403).json({ message: 'Unauthorized: Invalid admin key' });
    }

    next();
};

// Admin Routes

// UPDATE Stat - Admin only
router.post('/stats/update', validateAdminKey, async (req, res) => {
    const { key, action } = req.body; // e.g., 'allEvents', action: 'increment' or 'decrement'

    try {
        // Import Stat model from the main file
        const Stat = require('mongoose').model('Stat');

        const stats = await Stat.findOne();
        if (stats && stats[key] !== undefined) {
            if (action === 'decrement') {
                stats[key] = Math.max(0, stats[key] - 1); // Prevent negative stats
            } else {
                stats[key] += 1; // Default to increment
            }
            await stats.save();
            res.json(stats);
        } else {
            res.status(404).json({ message: 'Stat not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET all stats - Admin only (optional, can be public)
router.get('/stats', async (req, res) => {
    try {
        const Stat = require('mongoose').model('Stat');
        const stats = await Stat.findOne();
        res.json(stats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
