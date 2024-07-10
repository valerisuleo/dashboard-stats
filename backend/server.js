const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

// Read the JSON file
const dataPath = path.join(__dirname, 'seed.json');
let jsonData;

fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    jsonData = JSON.parse(data);
});

// Define a route to get the filtered JSON data
app.get('/gamelogs', (req, res) => {
    if (!jsonData) {
        return res.status(500).send('Data is not yet loaded');
    }

    const { min, max } = req.query;
    const minNum = parseInt(min, 10); // Parse min as a decimal number
    const maxNum = parseInt(max, 10); // Parse max as a decimal number

    if (isNaN(minNum) || isNaN(maxNum)) {
        return res.status(400).send('Invalid query parameters');
    }

    const filteredData = jsonData.gamelogs.filter((game) => {
        const { outsFaced } = game.stats.fielding;
        return outsFaced >= minNum && outsFaced <= maxNum;
    });

    res.json({ gamelogs: filteredData, total: jsonData.gamelogs.length });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
