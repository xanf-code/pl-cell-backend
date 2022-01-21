const Users = require('../models/users');

async function getUsers() {
    try {
        const user = await Users.find();
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = getUsers;