const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// fetch JSON data
app.get('/api/data', (req, res) => {
    // Read the JSON file
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error in JSON data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
