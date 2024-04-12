const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const SunawayLagoonBookTypeFourDateBlock = mongoose.model('SunawayLagoonBookTypeFourDateBlock', datesSchema)
module.exports = SunawayLagoonBookTypeFourDateBlock;