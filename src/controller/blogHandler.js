const { addBlog, removeBlog, getBlogByID, getBlogs } = require("../service/blogService");

async function blogHandler(req, res) {
    try {
        const blog = await addBlog(req.body);
        if (blog) {
            res.status(200).json({
                message: 'Blog added successfully',
            });
        } else {
            res.status(404).json({
                message: 'Something went wrong'
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e.message);
    }
}

async function getAllBlogs(req, res) {
    try {
        const blog = await getBlogs();
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({
                message: 'Something went wrong'
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e.message);
    }
}

async function deleteBlog(req, res) {
    const bid = req.params.bid;
    try {
        const blog = await removeBlog(bid);
        if (blog) {
            res.status(200).json({
                message: 'Blog removed successfully',
            });
        } else {
            res.status(404).json({
                message: 'Something went wrong'
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e.message);
    }
}

async function singleBlog(req, res) {
    const bid = req.params.bid;
    try {
        const blog = await getBlogByID(bid);
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({
                message: 'Something went wrong'
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e.message);
    }
}

module.exports = { blogHandler, getAllBlogs, deleteBlog, singleBlog } 