const { model, Schema } = require('mongoose');

const studentRegistration = new Schema({
    id: String,
    name: String,
    usn: String,
    email: String,
    phone: String,
    degree: String,
    department: String,
    CGPA: String,
    backlogs: String,
    XIIth: String,
    Xth: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
})

const companyMeta = new Schema({
    companyBond: String,
    internship: String,
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
    }],
    registers: [String]
});

module.exports = model('Companies', companySchema);