import { Schema, model } from 'mongoose';

let collection = 'cities';

let schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    capital: { type: String, required: true },
},
    { timestamps: true });

let City = model(collection, schema);

export default City;
