const Users = require('../models/users');

async function getUserByID(id) {
    try {
        const user = await Users.findById({ _id: id });
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = getUserByID;