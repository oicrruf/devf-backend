var express = require('express');
var router = express.Router();

const Bookstore = require('../models/Bookstore');

router.post('/bookstores', (req, res) => {
  Bookstore.create(req.body)
    .then(bookstore => res.status(201).json(bookstore))
    .catch(err => res.status(400).json(err));
});

router.get('/bookstores', (req, res) => {
  Bookstore.find()
    .then(bookstore => {
      if (bookstore.length === 0) res.status(200).json({ menssage: 'Not found Bookstores' });
      res.status(200).json(bookstore);
    })
    .catch(err => res.status(400).json(err));
});

router.get('/bookstores/:id', (req, res) => {
  Bookstore.findById(req.params.id)
    .then(bookstores => res.status(200).json(bookstores))
    .catch(err => res.status(404).json(err));
});

router.patch('/bookstores/:id', (req, res) => {
  Bookstore.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(bookstores => res.status(200).json(bookstores))
    .catch(err => res.status(404).json(err));
});

router.delete('/bookstores/:id', (req, res) => {
  Bookstore.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});

module.exports = router;