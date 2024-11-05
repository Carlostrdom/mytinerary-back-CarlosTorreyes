import { Router } from "express";
import citiesrouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";

const router = Router();

router.use('/cities', citiesrouter);
router.use('/itineraries', itinerariesRouter);

export default router;