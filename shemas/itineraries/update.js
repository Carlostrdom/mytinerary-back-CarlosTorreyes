import joi from "joi-oid";
import {
    ERROR_REQUIRED,
    ERROR_NUMBER,
    ERROR_ARRAY,
    ERROR_FORMAT_ID,
} from "../utils/message.js";

const schema = joi.object({
    _id: joi
        .objectId()
        .messages({
            "string.pattern.name": "_id " + ERROR_FORMAT_ID,
            "any.required": "_id " + ERROR_REQUIRED,

        })
    ,
    photoItinerary: joi
        .string()
        .required()
        .messages({
            "string.empty": "photoItinerary " + ERROR_REQUIRED,
            "any.required": "photoItinerary " + ERROR_REQUIRED,
        }),

    activity: joi
        .string()
        .required()
        .messages({
            "string.empty": "activity " + ERROR_REQUIRED,
            "any.required": "activity " + ERROR_REQUIRED,
        }),

    price: joi
        .number()
        .required()
        .messages({
            "number.base": "price " + ERROR_NUMBER,
            "any.required": "price " + ERROR_REQUIRED,
        }),

    duration: joi
        .number()
        .required()
        .messages({
            "number.base": "duration " + ERROR_NUMBER,
            "any.required": "duration " + ERROR_REQUIRED,
        }),

    likes: joi
        .number()
        .required()
        .messages({
            "number.base": "likes " + ERROR_NUMBER,
            "any.required": "likes " + ERROR_REQUIRED,
        }),

    hashtags: joi
        .array()
        .required()
        .messages({
            "array.base": "hashtags " + ERROR_ARRAY,
            "any.required": "hashtags " + ERROR_REQUIRED,
        }),

    comments: joi
        .array()
        .required()
        .messages({
            "array.base": "comments " + ERROR_ARRAY,
            "any.required": "comments " + ERROR_REQUIRED,
        }),

    user: joi
        .objectId()
        .messages({
            "string.pattern.name": "user " + ERROR_FORMAT_ID,
        }),

    city: joi
        .objectId()
        .messages({
            "string.pattern.name": "city " + ERROR_FORMAT_ID,
        }),
});

export default schema;
