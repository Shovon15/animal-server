require("dotenv").config({ path: ".env" });

const serverPort = process.env.SERVER_PORT || 5001;
const mongoDB = process.env.MONGODB_URI || "";

const cloudName = process.env.CLOUD_NAME;
const cloudApiKey = process.env.CLOUD_API_KEY;
const cloudApiSecret = process.env.CLOUD_API_SECRET;


module.exports = {
	serverPort,
	mongoDB,
	cloudName,
	cloudApiKey,
	cloudApiSecret,
};
