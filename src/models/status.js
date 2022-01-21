const { model, Schema } = require('mongoose');

const statusSchema = new Schema({
    company: String,
    status: String,
});

module.exports = model('Status', statusSchema);