const mongoose = require('mongoose');

const BookstoresSchema = new mongoose.Schema({
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

const Bookstores = mongoose.model('Bookstores', BookstoresSchema);

module.exports = Bookstores;