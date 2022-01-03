const Users = require('../models/users');

async function updateUser(input, uid) {
    try {
        const user = await Users.findByIdAndUpdate({ _id: uid }, input);
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = updateUser;