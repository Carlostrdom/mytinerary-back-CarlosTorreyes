import joi from "joi-oid";
import {
    ERROR_REQUIRED,
    ERROR_STRING,
    ERROR_FORMAT_URL,
    ERROR_MIN,
    ERROR_MAX,
    ERROR_FORMAT_ID
} from "../utils/message.js";

const schema = joi.object({
    _id: joi
        .objectId()
        .required()
        .messages({
            "string.pattern.name": "_id " + ERROR_FORMAT_ID,
            "any.required": "_id " + ERROR_REQUIRED,
        }),
    name: joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.empty": "name " + ERROR_REQUIRED,
            "any.required": "name " + ERROR_REQUIRED,
            "string.min": "name " + ERROR_MIN(3),
            "string.max": "name " + ERROR_MAX(100),
            "string.base": "name " + ERROR_STRING,
        }),

    image: joi
        .string()
        .uri()

        .messages({
            "string.empty": "image " + ERROR_REQUIRED,
            "any.required": "image " + ERROR_REQUIRED,
            "string.uri": "image " + ERROR_FORMAT_URL,
            "string.base": "image " + ERROR_STRING,
        }),

    continent: joi
        .string()
        .min(3)
        .max(50)

        .messages({
            "string.empty": "continent " + ERROR_REQUIRED,
            "any.required": "continent " + ERROR_REQUIRED,
            "string.min": "continent " + ERROR_MIN(3),
            "string.max": "continent " + ERROR_MAX(50),
            "string.base": "continent " + ERROR_STRING,
        }),

    description: joi
        .string()
        .min(10)
        .max(500)

        .messages({
            "string.empty": "description " + ERROR_REQUIRED,
            "any.required": "description " + ERROR_REQUIRED,
            "string.min": "description " + ERROR_MIN(10),
            "string.max": "description " + ERROR_MAX(500),
            "string.base": "description " + ERROR_STRING,
        }),

    capital: joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.base": "capital " + ERROR_STRING,
            "string.empty": "capital " + ERROR_REQUIRED,
            "any.required": "capital " + ERROR_REQUIRED,
            "string.min": "capital " + ERROR_MIN(3),
            "string.max": "capital " + ERROR_MAX(100),
        }),

});

export default schema;
