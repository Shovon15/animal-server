const createHttpError = require("http-errors");
const Animal = require("../models/animalModel");
const { successResponse } = require("./responseController");

const uploadAnimal = async (req, res, next) => {
    const { animalName, categoryName, image } = req.body;

    if (!animalName || !categoryName || !image) {
        throw createHttpError(404, "All Field is required.");
    }

    try {
        const data = await Animal.create({
            animalName,
            categoryName,
            image
        });

        return successResponse(res, {
            statusCode: 200,
            message: "New Category Created",
            payload: {
                data
            },
        });
    } catch (error) {
        return next(error);

    }
}


const getAnimalByCategory = async (req, res, next) => {
    const { categoryName } = req.params;

    try {

        const data = await Animal.find({ categoryName });

        return successResponse(res, {
            statusCode: 200,
            message: "animal returned successfully",
            payload: {
                data
            },
        });
    } catch (error) {
        return next(error);
    }
};


module.exports = {
    uploadAnimal,
    getAnimalByCategory,
};
