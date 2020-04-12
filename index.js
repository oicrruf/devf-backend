require('dotenv').config()
require('./database/');
const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

const OPEN_LIBRARY_SEARCH = 'http://openlibrary.org/search.json?q=';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Hubooks');
});

app.get('/api/v1/books/:name', (req, res, body) => {
    const book = req.params;
    request.get(OPEN_LIBRARY_SEARCH + book.name, { json: true }, (error, response, body) => {
        if (body.docs.length > 0) {
            let books = []
            body.docs.forEach((book) => {
                let covers = [];
                if (book.isbn) {
                    book.isbn.forEach(c => {
                        covers.push(`http://covers.openlibrary.org/b/isbn/${c}-L.jpg`)
                    })
                }
                books.push({
                    "name": book.title_suggest,
                    "cover": book.isbn ? covers : null,
                    "author_picture": book.author_key ? `http://covers.openlibrary.org/a/olid/${book.author_key}-S.jpg` : null,
                    "author_name": book.author_name ? book.author_name : null,
                    "language": book.language ? book.language : null,
                    "subject": book.subject ? book.subject : null,
                    "publish_year": book.publish_year ? book.publish_year : null,
                    "publisher": book.publisher ? book.publisher : null,
                    "isbn": book.isbn ? book.isbn : null
                })
            });
            res.send({ "book": books })
        } else { res.send({ "message": "Not found result" }) }
    })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));