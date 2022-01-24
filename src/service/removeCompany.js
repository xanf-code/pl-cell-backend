const company = require("../models/company");

async function removeCompany(cid) {
    try {
        const stat = await company.findByIdAndDelete({ _id: cid });
        return stat;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = removeCompany;