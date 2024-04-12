const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const SunawayLagoonBookTypeTwoDateBlock = mongoose.model('SunawayLagoonBookTypeTwoDateBlock', datesSchema)
module.exports = SunawayLagoonBookTypeTwoDateBlock;