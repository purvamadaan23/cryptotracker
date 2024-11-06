require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cryptoRoutes = require('./routes/cryptoRoutes');
const connectDB = require('./config/db');

const app = express();

// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Your frontend URL
  optionsSuccessStatus: 200,       // Some legacy browsers choke on 204
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', cryptoRoutes);

const PORT = process.env.PORT || 10000; // Ensure PORT is correctly set in .env
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




