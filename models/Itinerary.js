import { Schema, model } from 'mongoose';

let collection = 'itineraries';

let schema = new Schema({
    photoItinerary: { type: String, required: true },
    activity: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: Array, required: true },
    comments: { type: Array, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    city: { type: Schema.Types.ObjectId, ref: 'cities' }
},
    { timestamps: true });

let Itinerary = model(collection, schema);

export default Itinerary;
