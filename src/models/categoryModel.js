const { Schema, model, models } = require("mongoose");

const categorySchema = new Schema(
    {
        name: {
            type: String,
            requier: [true, "category name is required"],
        },
        value: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
        },
    },
    {
        timestamps: true,
    }
);

categorySchema.pre('save', async function (next) {
    if (this.isModified('name')) {

        let baseValue = this.name.trim().replace(/\s+/g, "_").toLowerCase();
        let uniqueValue = baseValue;
        let counter = 1;

        while (await models.category.exists({ value: uniqueValue })) {
            uniqueValue = `${baseValue}_${counter}`;
            counter++;
        }

        this.value = uniqueValue;
    }
    next();
});

const Category = models.category || model("category", categorySchema);

module.exports = Category;