const calander = require("../models/calendar");

async function addEvent(input) {
    try {
        const event = await calander.create(input);
        return event;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = addEvent;