import express from 'express';
import rateLimit from 'express-rate-limit';
import { register, signIn } from '../controllers/authController.js';

const limiter=rateLimit({
    windowMs:15*60*1000,
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
const router=express.Router();
router.post("/register",limiter,register);
router.post("/login",signIn);
export default router;