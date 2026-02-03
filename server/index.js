const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/brovanta_stats')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// Stats Schema
const statSchema = new mongoose.Schema({
  allEvents: { type: Number, default: 0 },
  brandsAssociates: { type: Number, default: 0 },
  problemsSolved: { type: Number, default: 0 },
  websitesCompleted: { type: Number, default: 0 },
  runningWork: { type: Number, default: 0 }
});

const Stat = mongoose.model('Stat', statSchema);

// Initialize Data if empty
const seedData = async () => {
  const count = await Stat.countDocuments();
  if (count === 0) {
    await Stat.create({
      allEvents: 85,
      brandsAssociates: 110,
      problemsSolved: 60,
      websitesCompleted: 35,
      runningWork: 20
    });
    console.log('Initial stats seeded');
  }
};
seedData();

// Routes
app.get('/', (req, res) => {
  res.send('Brovanta API is running');
});

// GET Stats
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await Stat.findOne();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE Stat
app.post('/api/stats/update', async (req, res) => {
  const { key } = req.body; // e.g., 'allEvents'
  try {
    const stats = await Stat.findOne();
    if (stats && stats[key] !== undefined) {
      stats[key] += 1;
      await stats.save();
      res.json(stats);
    } else {
      res.status(404).json({ message: 'Stat not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
