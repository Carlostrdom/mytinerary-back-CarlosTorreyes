import Itinerary from "../../models/Itinerary.js";

const deletedItinerary = async (req, res, next) => {
    try {
        let delItinerary = await Itinerary.deleteOne({_id: req.params._id});

        
            return res.status(200).json({
                response: delItinerary,
            });
       
    } catch (error) {
        next(error);
    }
};

export { deletedItinerary };