import Itinerary from "../../models/Itinerary.js";
let createItinerary = async (req, res, next) => {
    try {
        let newCityItinerary = req.body;
        let Itinerarynew = await Itinerary.create(newCityItinerary);
        return res.status(201).json({
            response: Itinerarynew
        });
    } catch (error) {
        next(error);
    }
};

export default createItinerary;