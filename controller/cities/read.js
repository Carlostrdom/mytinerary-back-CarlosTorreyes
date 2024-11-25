import City from "../../models/City.js";


let allcities = async (req, res, next) => {
    try {
        console.log(req.query.search);
        
        const namequery = req.query.search ? {name: {$regex: req.query.search, $options:'i'}}:{}

        const cities = await City.find(namequery);
        return res.status(200).json({
            response: cities
        })

    } catch (error) {
        next(error)

    }
}



let cityById = async (req, res, next) => {

    try {

        let cityQuery = req.params.id
        let all = await City.findById(cityQuery)
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

export { allcities, cityById }