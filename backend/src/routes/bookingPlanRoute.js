import { Router } from "express";
import { addBookingPlan, getAllBookingPlan } from "../controllers/bookingPlanController.js";
import { authAdmin } from "../middlewares/authMiddleware.js";

const router = Router()

router.post('/createbookingplan', authAdmin, addBookingPlan)
router.get('/getallbookingplan', getAllBookingPlan)

export default router