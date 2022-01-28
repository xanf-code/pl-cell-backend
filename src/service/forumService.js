const post = require("../models/forum");

async function addForumPosts(input) {
    try {
        const stat = await post.create(input);
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

async function getPosts() {
    try {
        const stat = await post.find().sort({ created: -1 });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

async function removePost(pid) {
    try {
        const stat = await post.findByIdAndDelete({ _id: pid });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

async function getPostByID(pid) {
    try {
        const stat = await post.findById({ _id: pid });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    addForumPosts,
    getPosts,
    removePost,
    getPostByID
}