import City from "../../models/City.js";

const deletedcity = async (req, res, next) => {
    try {

        let delCity = await City.deleteOne({_id: req.params._id})
        return res.status(200).json({
            response: delCity,
        });

    } catch (error) {
        next(error);
    }
};

export { deletedcity };