import { Router, response } from "express";
import { allcities, cityById } from "../controller/cities/read.js";
import createCity from "../controller/cities/create.js";
import { updatedNewcities } from "../controller/cities/update.js";
import { deletedcity } from "../controller/cities/delete.js";
const router = Router();

router.get('/all', allcities);
router.get('/_id/:id', cityById);
router.post('/create', createCity);
router.put('/update', updatedNewcities);
router.delete('/delete', deletedcity);

export default router