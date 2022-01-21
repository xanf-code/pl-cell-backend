const { model, Schema } = require('mongoose');

const studentRegistration = new Schema({
    id: String,
    name: String,
    usn: String,
    email: String,
    mobile: Number,
    degree: String,
    branch: String,
    CGPA: Number,
    backlogs: Number,
})

const companyMeta = new Schema({
    companyBond: String,
    internship: Boolean,
    otherDetails: String,
})

const companyEligibility = new Schema({
    branches: String,
    academics: String,
    backlogs: String,
})

const companySchema = new Schema({
    companyName: String,
    companyLogo: String,
    postDate: {
        type: Date,
        default: Date.now
    },
    salary: String,
    pdfLink: String,
    eligibility: {
        type: companyEligibility,
        _id: false
    },
    meta: {
        type: companyMeta,
        _id: false
    },
    registration: [{
        type: studentRegistration,
        _id: false
    }]
});

module.exports = model('Companies', companySchema);