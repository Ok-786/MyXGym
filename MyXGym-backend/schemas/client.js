const Joi = require('joi');

module.exports.validateClientSignup = (clientValues) => {
    const schema = Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        email: Joi.string().max(255).email().required(),
        streetAddress: Joi.string().max(255).required(),
        appartmentNumber: Joi.string().max(255).required(),
        country: Joi.string().max(255).required(),
        state: Joi.string().max(255).required(),
        city: Joi.string().max(255).required(),
        age: Joi.number().required(),
        height: Joi.number().required(),
        weight: Joi.number().required(),
        fat: Joi.number().required(),
        heartRate: Joi.number().required(),
        bloodPressure: Joi.number().required(),
        fitnessGoals: Joi.string().required(),
        neck: Joi.number().required(),
        chest: Joi.number().required(),
        rightBicep: Joi.number().required(),
        leftBicep: Joi.number().required(),
        waist: Joi.number().required(),
        hips: Joi.number().required(),
        rightThigh: Joi.number().required(),
        leftThigh: Joi.number().required(),
        rightCalf: Joi.number().required(),
        leftCalf: Joi.number().required(),
    })
    return schema.validate(clientValues);
}