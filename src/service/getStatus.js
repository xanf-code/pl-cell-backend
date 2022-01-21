const status = require("../models/status");

async function getStatus() {
    try {
        const stat = await status.find();
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = getStatus;