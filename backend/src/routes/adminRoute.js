const {Router} = require('express');
const { getAdminData, loginAdmin, logoutAdmin, registerAdmin } = require('../controllers/adminController');

const { authAdmin } = require('../middlewares/authMiddleware');


const router  = Router()

// router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.get('/logout', logoutAdmin)
router.get('/admin-data', authAdmin, getAdminData)

module.exports = router