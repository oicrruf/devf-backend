const express = require('express');
const router = express.Router();
const BooksRoutes = require('./BooksRoutes');

router.use(BooksRoutes);

module.exports = router;