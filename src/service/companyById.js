const Company = require('../models/company');

async function getCompanyByID(cid) {
    try {
        const comp = await Company.findById({ _id: cid });
        return comp;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = getCompanyByID;