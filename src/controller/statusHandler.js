const addStatus = require("../service/addStatusService");
const getStatus = require("../service/getStatus");
const removeStatus = require("../service/removeStatus");

async function statusHandler(req, res) {
    try {
        const status = await addStatus(req.body);
        if (status) {
            res.status(200).json({
                message: 'status added successfully',
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

async function getAllStatus(req, res) {
    try {
        const status = await getStatus();
        if (status) {
            res.status(200).json(status);
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

async function removeStat(req, res) {
    const sid = req.params.sid;
    try {
        const status = await removeStatus(sid);
        if (status) {
            res.status(200).json({
                message: 'status removed successfully',
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

module.exports = { statusHandler, getAllStatus, removeStat }; 