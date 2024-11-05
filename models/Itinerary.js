import { Schema, model } from 'mongoose';

let collection = 'itineraries';

let schema = new Schema({
    userPhoto: { type: String, required: true },
    userName: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: Array, required: true },
    comments: { type: Array, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'cities' }
},
    { timestamps: true });

let Itinerary = model(collection, schema);

export default Itinerary;
