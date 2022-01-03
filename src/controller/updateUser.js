const updateUser = require('../service/updateUserService');

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

module.exports = updateUserhandler;