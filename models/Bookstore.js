const mongoose = require('mongoose');

const BookstoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    country: {
        type: String, 
        enum : ['Colombia', 'El Salvador', 'México', 'Venezuela'], 
        required : true,
    }
},{
  timestamps: true,
});

const Bookstore = mongoose.model('Bookstore', BookstoreSchema);

module.exports = Bookstore;