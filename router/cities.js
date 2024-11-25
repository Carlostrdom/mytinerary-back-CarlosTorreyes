import { Router, response } from "express";
import { allcities, cityById } from "../controller/cities/read.js";
import createCity from "../controller/cities/create.js";
import { updatedNewcities } from "../controller/cities/update.js";
import { deletedcity } from "../controller/cities/delete.js";
import passport from "../middlewares/passport.js";
import userValidator from "../middlewares/userValidator.js";
import city_schema from "../shemas/city/create.js";
import cityExists from "../middlewares/cityExists.js";
import city_schema_update from "../shemas/city/update.js";
const router = Router();

router.get('/all', allcities);
router.get('/_id/:id', passport.authenticate('jwt',{session:false}),cityById);
router.post('/create', userValidator(city_schema),cityExists,createCity);
router.put('/update', passport.authenticate('jwt',{session:false}),userValidator(city_schema_update),updatedNewcities);
router.delete('/delete', passport.authenticate('jwt',{session:false}),deletedcity);

export default router