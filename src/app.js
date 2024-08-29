const express = require("express");
const cors = require("cors");
const { errorResponse } = require("./controllers/responseController");
const createHttpError = require("http-errors");
const { serverPort } = require("./secret");
const connectDB = require("./config/db");
const categoryRouter = require("./routers/categoryRouter");
const animalRouter = require("./routers/animalRouter");


const app = express();

// middleware--------------------
app.use(cors());
app.use(express.json());


app.use("/api/category", categoryRouter);
app.use("/api/animal", animalRouter);

//welcome route-------------
app.get("/", (req, res) => {
	res.status(200).send({
		message: "welcome to server!!!",
	});
});

//client error--------------------
app.use((req, res, next) => {
	next(createHttpError(404, "Route not found."));
});

//server error------------------
app.use((err, req, res, next) => {
	return errorResponse(res, {
		statusCode: err.status,
		message: err.message,
	});
});
connectDB();

app.listen(serverPort, async () => {
	console.log(`server running on ${serverPort}`);
});

module.exports = app;
