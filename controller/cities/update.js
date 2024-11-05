import City from "../../models/City.js";

const updatedNewcities = async (req, res, next) => {
    try {

        const updatedcities = await City.findByIdAndUpdate(
            req.body._id,
            req.body,
            { new: true }
        );

        if (updatedcities) {
            return res.status(200).json({
                response: updatedcities,
            });
        } else {
            next(error)

        }
    } catch (error) {
        next(error);
    }
};




export { updatedNewcities };
