const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const ArasResurantBookTypeOneDateBlock = mongoose.model('ArasResurantBookTypeOneDateBlock', datesSchema)
module.exports = ArasResurantBookTypeOneDateBlock;