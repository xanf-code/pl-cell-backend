const addEvent = require("../service/addEvent");
const getEvents = require("../service/getEvents");

async function addEventHandler(req, res) {
    try {
        const status = await addEvent(req.body);
        if (status) {
            res.status(200).json({
                message: 'Event added successfully',
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

async function getCalendarEvents(req, res) {
    try {
        const events = await getEvents(req.query.start, req.query.end);
        if (events) {
            res.status(200).json(events);
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

module.exports = { addEventHandler, getCalendarEvents }; 