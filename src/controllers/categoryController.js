const Category = require("../models/categoryModel");
const { successResponse, errorResponse } = require("./responseController");

const uploadCategory = async (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return errorResponse(res, {
            statusCode: 400,
            message: "Category name cannot be empty.",
        });
    }

    try {
        const data = await Category.create({
            name
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

const getCategory = async (req, res, next) => {

    try {
        const data = await Category.find();

        return successResponse(res, {
            statusCode: 200,
            message: "Category returned successfully",
            payload: {
                data
            },
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    uploadCategory,
    getCategory,
};
