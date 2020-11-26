const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	author: {
		type: String,
	},
	content: {
		type: String,
	},
	time: {
		type: Date,
	},
});

module.exports = mongoose.model("Blog", blogSchema);
