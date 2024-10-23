import { Router, response } from "express";
import { allcities, cityById } from "../controller/cities/read.js";
import createCity from "../controller/cities/create.js";
const router = Router();

router.get('/all', allcities);
router.get('/_id/:id', cityById);
router.post('/create', createCity);

export default router