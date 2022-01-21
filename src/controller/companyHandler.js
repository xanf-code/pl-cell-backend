const addCompany = require("../service/addCompany");
const getCompanies = require("../service/getCompanies");

async function companyHandler(req, res) {
    try {
        const status = await addCompany(req.body);
        if (status) {
            res.status(200).json({
                message: 'company added successfully',
            });
        } else {
            res.status(404).json({
                message: 'Something went wrong'
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e.message);
    }
}

async function getAllCompanies(req, res) {
    try {
        const company = await getCompanies();
        if (company) {
            res.status(200).json(company);
        } else {
            res.status(404).json({
                message: 'Something went wrong'
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e.message);
    }
}

module.exports = { companyHandler, getAllCompanies }; 