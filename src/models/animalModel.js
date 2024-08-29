const { Schema, model, models } = require("mongoose");

const animalSchema = new Schema(
    {
        animalName: {
            type: String,
            requier: [true, "animal name is required"],
        },
        categoryName: {
            type: String,
            requier: [true, "category name is required"],
        },
        image: {
            type: String,
            requier: [true, "image is required"],
        },
    },
    {
        timestamps: true,
    }
);

const Animal = models.animal || model("animal", animalSchema);

module.exports = Animal;