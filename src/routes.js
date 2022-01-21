const { companyHandler, getAllCompanies } = require('./controller/companyHandler');
const { statusHandler, getAllStatus } = require('./controller/statusHandler');
const { updateUserhandler, getAllUser, getUser } = require('./controller/updateUser');

function routes(app) {
    app.get('/details', getAllUser);

    app.get('/details/:id', getUser);

    app.patch('/student/details/:uid', updateUserhandler);

    app.post('/status', statusHandler);

    app.get('/status', getAllStatus);

    app.post('/add/company', companyHandler);

    app.get('/get/companies', getAllCompanies);
}

module.exports = routes;