const events = require("../models/calendar");
const moment = require("moment")

async function getEvents(eventStart, eventEnd) {
    try {
        const event = await events.find({
            start: { $gte: moment(eventStart).toDate() },
            end: { $lte: moment(eventEnd).toDate() },
        });
        return event;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = getEvents;