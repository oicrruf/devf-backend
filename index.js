require('dotenv').config()
require('./database/');
var cors = require('cors')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Hubooks');
});

app.use('/api/v1', require('./routes'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));