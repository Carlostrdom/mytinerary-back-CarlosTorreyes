import City from "../../models/City.js";

const deletedcity = async (req, res, next) => {
    try {
        const deleteCity = await City.findByIdAndDelete(req.body._id);

        if (deleteCity) {
            return res.status(200).json({
                response: deleteCity,
            });
        } else {

            next(error);
        }
    } catch (error) {
        next(error);
    }
};

export { deletedcity };