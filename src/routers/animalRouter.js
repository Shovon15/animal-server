const express = require("express");
const { uploadAnimal, getAnimal, getAnimalByCategory } = require("../controllers/animalController");


const animalRouter = express.Router();

animalRouter.post("/", uploadAnimal);
animalRouter.get("/:categoryName", getAnimalByCategory);


module.exports = animalRouter;
