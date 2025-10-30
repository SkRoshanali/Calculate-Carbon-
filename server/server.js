const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// ✅ CORS Configuration (allow frontend access)
app.use(cors({
  origin: ["https://calculate-carbon-1.onrender.com"], // your frontend Render URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/calculator', require('./routes/calculator'));

// Default route
app.get('/', (req, res) => {
  res.send('🌱 Carbon Footprint Calculator API is running...');
});

// Start Server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
