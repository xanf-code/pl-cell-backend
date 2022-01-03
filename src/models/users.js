const { model, Schema } = require('mongoose');

const userMeta = new Schema({
    department: String,
    semester: Number,
    USN: String,
    CGPA: Number,
})

const offerinfo = new Schema({
    hasMultipleOffers: Boolean,
    isException: Boolean,
})

const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    emailVerified: Boolean,
    isAdmin: Boolean,
    user_meta: {
        type: userMeta,
        _id: false,
    },
    offer_info: {
        type: offerinfo,
        _id: false,
    }
});

module.exports = model('users', userSchema);