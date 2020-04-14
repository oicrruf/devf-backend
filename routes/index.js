const express = require('express');
const router = express.Router();
const BooksRoutes = require('./BooksRoutes');
const BookstoresRoutes = require('./BookstoresRoutes');
const UsersRoutes = require('./UsersRoutes');

router.use(BooksRoutes);
router.use(BookstoresRoutes);
router.use(UsersRoutes);

module.exports = router;