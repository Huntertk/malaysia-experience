const BookingPlan = require("../models/bookingPlans.js");

exports.addBookingPlan = async (req, res, next) => {
    try {
        await BookingPlan.create(req.body)
        res.status(201).json({bookingPlan:"Created"})
    } catch (error) {
        next(error)
    }
}

exports.getAllBookingPlan = async (req, res, next) => {
    try {
        const bookingPlan = await BookingPlan.find({service: req.query.service})
        res.status(200).json({bookingPlan})
    } catch (error) {
        next(error)
    }
}