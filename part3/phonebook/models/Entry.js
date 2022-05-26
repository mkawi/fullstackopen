require("dotenv").config();
const mongoose = require("mongoose");

const mongoDb = process.env.MONGODB_URI;

mongoose
	.connect(mongoDb)
	.then((result) => {
		console.log("connected to MongoDB");
	})
	.catch((error) => {
		console.log("error connecting to MongoDB:", error.message);
	});

const entrySchema = new mongoose.Schema({
	name: String,
	number: String,
});

module.exports = mongoose.model("Entry", entrySchema);
