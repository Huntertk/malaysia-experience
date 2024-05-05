const mongoose = require('mongoose');
const BookingPlan = require('../models/bookingPlans');
const {bookingPlanData} = require('./bookingPlanData');

const seedData = async () => {
    try {
        await mongoose.connect('mongodb+srv://factsofuniverse8:l3gGcnnTrnjrPYZx@cluster0.hil4zyh.mongodb.net/MalaysiaExperienceDB?retryWrites=true&w=majority')
        await BookingPlan.deleteMany();
        console.log("All Data Deleted");
        await BookingPlan.insertMany(bookingPlanData)
        console.log("All Data Loaded");
        process.exit(1)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

seedData()