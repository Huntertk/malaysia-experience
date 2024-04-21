const { Router } = require("express");
const { authAdmin } = require("../middlewares/authMiddleware.js");
const { addBlockDates, deleteBlockedDate, getAllBlockDates } = require("../controllers/blockedDateController.js");

const router = Router()

router.route('/').post(authAdmin, addBlockDates).get(getAllBlockDates)
router.delete('/:id', authAdmin, deleteBlockedDate)

module.exports = router;