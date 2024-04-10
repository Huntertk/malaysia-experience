const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const ArasResurantBookTypeTwoDateBlock = mongoose.model('ArasResurantBookTypeTwoDateBlock', datesSchema)
module.exports = ArasResurantBookTypeTwoDateBlock;