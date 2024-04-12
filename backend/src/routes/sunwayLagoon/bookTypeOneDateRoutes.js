const { Router } = require("express");
const { authAdmin } = require("../../middlewares/authMiddleware.js");
const { addBlockDates, deleteBlockedDate, getAllBlockDates } = require("../../controllers/sunwayLagoon/bookTypeOneDateController.js");

const router = Router()

router.post('/block-dates', authAdmin, addBlockDates)
router.get('/block-dates', getAllBlockDates)
router.delete('/block-dates/:id', authAdmin, deleteBlockedDate)

module.exports = router;