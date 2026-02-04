const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

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
      allEvents: 90,
      brandsAssociates: 110,
      problemsSolved: 60,
      websitesCompleted: 35,
      runningWork: 20
    });
    console.log('Initial stats seeded');
  }
};
seedData();

// Import Admin Routes
const adminRoutes = require('./admin');

// Public Routes
app.get('/', (req, res) => {
  res.send('Brovanta API is running');
});

// Public GET Stats endpoint
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await Stat.findOne();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mount Admin Routes
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
