const updateUserhandler = require('./controller/updateUser');

function routes(app) {
    app.get('/student/details', (req, res) => {
        res.sendStatus(200);
    })

    app.patch('/student/details/:uid', updateUserhandler)


}

module.exports = routes;