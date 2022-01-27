const { model, Schema } = require('mongoose');

const calendarSchema = new Schema({
    start: Date,
    end: Date,
    title: String
});

module.exports = model('CRCalendar', calendarSchema);