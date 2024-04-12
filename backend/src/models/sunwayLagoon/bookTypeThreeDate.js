const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const SunawayLagoonBookTypeThreeDateBlock = mongoose.model('SunawayLagoonBookTypeThreeDateBlock', datesSchema)
module.exports = SunawayLagoonBookTypeThreeDateBlock;