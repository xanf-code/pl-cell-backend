const getUsers = require('../service/getUsers');
const updateUser = require('../service/updateUserService');
const getUserByID = require('../service/userByID');

async function updateUserhandler(req, res) {
    try {
        const uid = req.params.uid;
        const user = await updateUser(req.body, uid);
        if (user) {
            res.status(200).json({
                message: 'User updated successfully',
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

async function getAllUser(req, res) {
    try {
        const status = await getUsers();
        if (status) {
            res.status(200).json(status);
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

async function getUser(req, res) {
    try {
        const id = req.params.id;
        const status = await getUserByID(id);
        if (status) {
            res.status(200).json(status);
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

module.exports = { updateUserhandler, getAllUser, getUser };