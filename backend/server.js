require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cryptoRoutes = require('./routes/cryptoRoutes');
const connectDB = require('./config/db');

const app = express();

// Set up CORS to allow all origins
const corsOptions = {
  origin: true,         // Allow all origins
  optionsSuccessStatus: 200,  // Some legacy browsers choke on 204
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






