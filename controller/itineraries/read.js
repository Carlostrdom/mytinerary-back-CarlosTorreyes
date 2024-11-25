import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js";
import "../../models/User.js";

let allitineraries = async (req, res, next) => {
    try {
        const namequery =  req.query.search ? {name: {$regex: req.query.search, $options:'i'}}:{}
        const itineraries = await Itinerary.find(namequery)
        .populate('user', 'firstName lastName photoUrl email online') // Población de datos de usuarios
        .populate('city', 'name image continent description capital') // Población de datos de ciudades
        .exec();;
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


        const ItineraryA = await Itinerary.find({ city: city }).populate('city', 'name image continent description capital').populate('user', 'firstName lastName email photoUrl online').exec();

        return res.status(200).json({
            response: ItineraryA
        });

    } catch (error) {

        next(error)

    }
}

export { allitineraries, itineraryById, itineraryByIdcities };
