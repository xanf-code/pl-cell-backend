const mongoose = require('mongoose');

require('dotenv').config();

let mongoURL = process.env.MONGODB_URI;

async function connect() {
    try {
        await mongoose.connect(mongoURL);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.log('Error connecting to MongoDB: ', err);
        process.exit(1);
    }

}

module.exports = connect;