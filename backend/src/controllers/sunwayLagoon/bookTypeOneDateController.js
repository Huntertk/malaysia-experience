const SunwayLagoonTypeOneDateBlock = require('../../models/sunwayLagoon/bookTypeOneDate');

const addBlockDates  = async(req, res, next) => {
    try {
        const blockDates = await SunwayLagoonTypeOneDateBlock.create(req.body)
        res.status(201).json({msg:"Success", blockDates})
    } catch (error) {
        next(error)
    }
} 

const getAllBlockDates = async (req, res, next) => {
    try {
        const blockDates = await SunwayLagoonTypeOneDateBlock.find()
        res.status(200).json({blockDates})
    } catch (error) {
        next(error)
    }
}

const deleteBlockedDate = async(req, res, next) => {
    try {
        const dates = await SunwayLagoonTypeOneDateBlock.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"Removed Blocked Successfully"})
    } catch (error) {
        next(error)   
    }
}



module.exports = {
    addBlockDates,
    getAllBlockDates,
    deleteBlockedDate
}