const { model, Schema } = require('mongoose');

const blogSchema = new Schema({
    username: String,
    time: {
        type: Date,
        default: Date.now
    },
    title: String,
    content: String,
});

module.exports = model('Blog', blogSchema);