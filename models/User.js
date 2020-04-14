const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        enum: ['Colombia', 'El Salvador', 'México', 'Venezuela'],
        required: true,
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;