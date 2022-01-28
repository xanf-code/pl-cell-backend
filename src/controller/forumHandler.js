const { addForumPosts, getPosts, removePost, getPostByID } = require("../service/forumService");

async function forumHandler(req, res) {
    try {
        const post = await addForumPosts(req.body);
        if (post) {
            res.status(200).json({
                message: 'Post added successfully',
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

async function getAllPosts(req, res) {
    try {
        const posts = await getPosts();
        if (posts) {
            res.status(200).json(posts);
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

async function deletePosts(req, res) {
    const pid = req.params.pid;
    try {
        const post = await removePost(pid);
        if (post) {
            res.status(200).json({
                message: 'Post removed successfully',
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

async function singlePost(req, res) {
    const pid = req.params.pid;
    try {
        const post = await getPostByID(pid);
        if (post) {
            res.status(200).json(post);
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

module.exports = { forumHandler, getAllPosts, deletePosts, singlePost } 