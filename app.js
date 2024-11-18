const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/api/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;