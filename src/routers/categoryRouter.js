const express = require("express");
const { getCategory, uploadCategory } = require("../controllers/categoryController");


const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", uploadCategory);


module.exports = categoryRouter;
