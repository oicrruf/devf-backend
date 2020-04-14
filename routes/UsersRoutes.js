const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/users', (req, res) => {
    User.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json(err));
});

router.get('/users', (req, res) => {
    User.find()
        .then(user => {
            if (user.length === 0) res.status(200).json({ menssage: 'Not found Users' });
            res.status(200).json(user);
        })
        .catch(err => res.status(400).json(err));
});

router.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(404).json(err));
});

router.patch('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(404).json(err));
});

router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

module.exports = router;