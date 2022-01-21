const status = require("../models/company");

async function addCompany(input) {
    try {
        const company = await status.create(input);
        return company;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = addCompany;