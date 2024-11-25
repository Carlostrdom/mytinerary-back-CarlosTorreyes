import { Router } from "express";
import { allitineraries, itineraryById, itineraryByIdcities } from "../controller/itineraries/read.js";
import createItinerary from "../controller/itineraries/create.js";
import { updatedNewItinerary } from "../controller/itineraries/update.js";
import { deletedItinerary } from "../controller/itineraries/delete.js";
import passport from "../middlewares/passport.js";
import itineraryExists from "../middlewares/itinerariExists.js";
import userValidator from "../middlewares/userValidator.js";
import itineraries_schema from "../shemas/itineraries/create.js";
import itineraries_schema_update from "../shemas/itineraries/update.js";

let router = Router();

router.get('/all', allitineraries);
router.get('/id/:id', passport.authenticate('jwt',{session:false}),itineraryById);
router.get('/cities/:id', itineraryByIdcities);
router.post('/create', userValidator(itineraries_schema),itineraryExists,createItinerary);
router.put('/update', passport.authenticate('jwt',{session:false}),userValidator(itineraries_schema_update),itineraryExists,updatedNewItinerary);
router.delete('/delete', passport.authenticate('jwt',{session:false}),deletedItinerary);



export default router;