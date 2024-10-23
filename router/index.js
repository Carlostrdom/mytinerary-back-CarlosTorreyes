import { Router } from "express";
import citiesrouter from "./cities.js";
const router = Router();

router.use('/cities', citiesrouter);

export default router;