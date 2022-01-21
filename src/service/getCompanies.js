const status = require("../models/company");

async function getCompanies() {
    try {
        const comp = await status.find().sort({ postDate: -1 });
        return comp;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = getCompanies;