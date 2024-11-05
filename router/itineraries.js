import { Router } from "express";
import { allitineraries, itineraryById, itineraryByIdcities } from "../controller/itineraries/read.js";
import createItinerary from "../controller/itineraries/create.js";
import { updatedNewItinerary } from "../controller/itineraries/update.js";
import { deletedItinerary } from "../controller/itineraries/delete.js";

let router = Router();

router.get('/all', allitineraries);
router.get('/id/:id', itineraryById);
router.get('/cities/:id', itineraryByIdcities);
router.post('/create', createItinerary);
router.put('/update', updatedNewItinerary);
router.delete('/delete', deletedItinerary);



export default router;