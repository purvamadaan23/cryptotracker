const express = require('express');
const axios = require('axios');

const router = express.Router();

// Route to get the top 10 data directly from the WazirX API
router.get('/top10', async (req, res) => {
  try {
    // Fetch data directly from the WazirX API
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = Object.values(response.data)
      .filter(ticker => ticker.quote_unit === 'usdt') // Filter for specific base unit if needed (optional)
      .slice(0, 10); // Get the top 10

    console.log('Fetched Data:', tickers); // Debugging log

    if (tickers.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    // Send the data as a response
    res.status(200).json(tickers);
  } catch (error) {
    console.error('Error in /top10 route:', error.message);
    res.status(500).json({ error: 'Failed to retrieve data from WazirX API' });
  }
});

module.exports = router;

