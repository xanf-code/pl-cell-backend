const Users = require("../models/company");

async function updateRegisteration(input, cid) {
    try {
        const user = await Users.findOneAndUpdate({ _id: cid }, {
            $addToSet: {
                registration: input,
                registers: input.id
            },
        });
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = updateRegisteration;