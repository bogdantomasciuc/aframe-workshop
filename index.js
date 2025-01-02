const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000; // You can change the port if needed

const options = {
    key: fs.readFileSync('ssl/arlabels.key'),
    cert: fs.readFileSync('ssl/arlabels.cert'),
  };

// Serve the html folder as static to serve assets like CSS, JS, etc.
app.use(express.static(path.join(__dirname, 'html')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Start the server
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
  });