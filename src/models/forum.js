const { model, Schema } = require('mongoose');

const forumSchema = new Schema({
    uid: String,
    username: String,
    userPic: String,
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    content: String,
    tag: String,
    // votes: [String]
});

module.exports = model('Forum', forumSchema);