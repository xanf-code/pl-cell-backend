const addCompany = require("../service/addCompany");
const getCompanies = require("../service/getCompanies");
const updateRegisteration = require("../service/registerCompany");
const removeCompany = require("../service/removeCompany");

async function updateCompanyHandler(req, res) {
    try {
        const cid = req.params.cid;
        const user = await updateRegisteration(req.body, cid);
        if (user) {
            res.status(200).json({
                message: 'Updated successfully',
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

async function deleteCompany(req, res) {
    const cid = req.params.cid;
    try {
        const status = await removeCompany(cid);
        if (status) {
            res.status(200).json({
                message: 'Company removed successfully',
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

module.exports = { companyHandler, getAllCompanies, updateCompanyHandler, deleteCompany }; 