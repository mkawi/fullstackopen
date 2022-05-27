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
	name: { type: String, minLength: 3, required: true },
	number: {
		type: String,
		minLength: 8,
		validate: {
			validator: function (v) {
				return /\d{2,3}-\d{5,15}/.test(v);
			},
			message: (props) => `${props.value} is not a valid phone number!`,
		},
		required: [true, "User phone number required"],
	},
});

module.exports = mongoose.model("Entry", entrySchema);
