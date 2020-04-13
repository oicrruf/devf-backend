require('dotenv').config()
require('./database/');
const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Hubooks');
});

app.use('/api/v1', require('./routes'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));