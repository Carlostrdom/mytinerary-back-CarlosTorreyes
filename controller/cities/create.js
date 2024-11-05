import City from "../../models/City.js";

let createCity = async (req, res, next) => {
    try {
        let newCity = req.body;
        let city = await City.create(newCity);
        return res.status(201).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

export default createCity;