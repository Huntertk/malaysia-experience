const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const BookTypeOneDateBlock = mongoose.model('BookTypeOneDateBlock', datesSchema)
module.exports = BookTypeOneDateBlock;