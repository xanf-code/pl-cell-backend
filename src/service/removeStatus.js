const status = require("../models/status");

async function removeStatus(sid) {
    try {
        const stat = await status.findByIdAndDelete({ _id: sid });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = removeStatus;