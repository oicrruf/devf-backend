const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('¡Te has conectado a MongoDB Atlas!'))
    .catch(err => console.log(err));