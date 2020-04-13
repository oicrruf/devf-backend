const express = require('express');
const router = express.Router();
const BooksRoutes = require('./BooksRoutes');
const BookstoresRoutes = require('./BookstoresRoutes');

router.use(BooksRoutes);
router.use(BookstoresRoutes);

module.exports = router;