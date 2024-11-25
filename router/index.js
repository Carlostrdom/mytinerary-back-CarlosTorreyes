import { Router } from "express";
import citiesrouter from "./cities.js";
import usersRouter from "./users.js";
import authRouter from "./auth.js";
import itinerariesRouter from "./itineraries.js";


const router = Router();

router.use('/cities', citiesrouter);
router.use('/itineraries',itinerariesRouter);
router.use('/users', usersRouter);
router.use('/auth',authRouter);



export default router;