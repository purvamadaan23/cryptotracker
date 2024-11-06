require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cryptoRoutes = require('./routes/cryptoRoutes');
const connectDB = require('./config/db');

const app = express();

// Set up CORS options dynamically based on environment
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://cryptotracker-frontend.onrender.com' // Your production frontend URL
    : 'http://localhost:3000',                    // Development environment (localhost)
  optionsSuccessStatus: 200,                       // Some legacy browsers choke on 204
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', cryptoRoutes);

// Ensure PORT is correctly set in .env
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





