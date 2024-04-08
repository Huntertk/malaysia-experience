const SplashManiaBookTypeOneDateBlock = require('../../models/splashMania/bookTypeOneDate');

const addBlockDates  = async(req, res, next) => {
    try {
        const blockDates = await SplashManiaBookTypeOneDateBlock.create(req.body)
        res.status(201).json({msg:"Success", blockDates})
    } catch (error) {
        next(error)
    }
} 

const getAllBlockDates = async (req, res, next) => {
    try {
        const blockDates = await SplashManiaBookTypeOneDateBlock.find()
        res.status(200).json({blockDates})
    } catch (error) {
        next(error)
    }
}

const deleteBlockedDate = async(req, res, next) => {
    try {
        const dates = await SplashManiaBookTypeOneDateBlock.findByIdAndDelete(req.params.id)
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