const mongoose = require("mongoose");
const { mongoUrl } = require("../utils/config");

mongoose.connect(mongoUrl);

const blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
});

module.exports = mongoose.model("Blog", blogSchema);
