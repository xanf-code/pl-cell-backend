const blog = require("../models/news");

async function addBlog(input) {
    try {
        const stat = await blog.create(input);
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

async function getBlogs() {
    try {
        const stat = await blog.find().sort({ time: -1 });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

async function removeBlog(bid) {
    try {
        const stat = await blog.findByIdAndDelete({ _id: bid });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

async function getBlogByID(bid) {
    try {
        const stat = await blog.findById({ _id: bid });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    addBlog,
    getBlogs,
    removeBlog,
    getBlogByID
}