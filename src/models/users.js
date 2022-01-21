const { model, Schema } = require('mongoose');

const userMeta = new Schema({
    phone: Number,
    department: String,
    semester: Number,
    USN: String,
    resume: String,
    X: String,
    XII: String,
    diploma: String,
    Type: String,
    CGPA: Number,
})

const socialInfo = new Schema({
    linkedin: String,
    github: String,
})

const offerinfo = new Schema({
    hasTwoOffers: Boolean,
    isException: Boolean,
})

const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    emailVerified: Boolean,
    isAdmin: Boolean,
    gender: String,
    user_meta: {
        type: userMeta,
        _id: false
    },
    offer_info: {
        type: offerinfo,
        _id: false,
    },
    social_info: {
        type: socialInfo,
        _id: false
    }
});

module.exports = model('users', userSchema);