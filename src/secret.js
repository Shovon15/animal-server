require("dotenv").config({ path: ".env" });

const serverPort = process.env.SERVER_PORT || 5001;
const mongoDB = process.env.MONGODB_URI || "";



module.exports = {
	serverPort,
	mongoDB,
};
