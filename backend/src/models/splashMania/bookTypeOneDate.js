const mongoose = require('mongoose');

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const SplashManiaBookTypeOneDateBlock = mongoose.model('SplashManiaBookTypeOneDateBlock', datesSchema)
module.exports = SplashManiaBookTypeOneDateBlock;