const { companyHandler, getAllCompanies, updateCompanyHandler, deleteCompany } = require('./controller/companyHandler');
const { statusHandler, getAllStatus, removeStat } = require('./controller/statusHandler');
const { updateUserhandler, getAllUser, getUser } = require('./controller/updateUser');

function routes(app) {
    app.get('/details', getAllUser);

    app.get('/details/:id', getUser);

    app.patch('/student/details/:uid', updateUserhandler);

    app.post('/status', statusHandler);

    app.get('/status', getAllStatus);

    app.delete('/status/:sid', removeStat);

    app.delete('/company/:cid', deleteCompany);

    app.post('/add/company', companyHandler);

    app.get('/get/companies', getAllCompanies);

    app.patch('/register/details/:cid', updateCompanyHandler);
}

module.exports = routes;