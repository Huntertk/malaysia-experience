const jwt = require('jsonwebtoken')
const AppError = require('../error/customError.js');
const Admin = require('../models/admin');

const authAdmin = async (req, res, next) => {
    const {admin_token}  = req.cookies
    try {
        if(!admin_token){
            return next(new AppError("Token not Found Please login", 401))
        }
        const decoded = jwt.verify(admin_token, process.env.JWT_SECRET);
        const adminData = await Admin.findById(decoded._id).select("-password"); 
        req.admin = adminData
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    authAdmin
}