import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js";

let allitineraries = async (req, res, next) => {
    try {
        let { city } = req.query;
        let namequery = {};


        if (city) {
            namequery.name = { $regex: '^' + city, $options: "i" };
        }

        const itineraries = await Itinerary.find(namequery).populate('city', 'name image continent description capital').exec();
        return res.status(200).json({
            response: itineraries
        });

    } catch (error) {
        next(error)
    }
}

let itineraryById = async (req, res, next) => {
    try {
        const itineraries = req.params.id;


        const ItineraryA = await Itinerary.findById(itineraries);

        return res.status(200).json({
            response: ItineraryA
        });

    } catch (error) {

        next(error)

    }
}

let itineraryByIdcities = async (req, res, next) => {
    try {
        const city = req.params.id;


        const ItineraryA = await Itinerary.find({ city: city }).populate('city', 'name image continent description capital').exec();

        return res.status(200).json({
            response: ItineraryA
        });

    } catch (error) {

        next(error)

    }
}

export { allitineraries, itineraryById, itineraryByIdcities };
