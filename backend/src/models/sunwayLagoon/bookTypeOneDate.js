const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const SunawayLagoonBookTypeOneDateBlock = mongoose.model('SunawayLagoonBookTypeOneDateBlock', datesSchema)
module.exports = SunawayLagoonBookTypeOneDateBlock;