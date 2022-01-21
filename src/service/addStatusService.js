const status = require("../models/status");

async function addStatus(input) {
    try {
        const stat = await status.create(input);
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = addStatus;