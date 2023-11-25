// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const SightingSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
	},
	description: {
		type: String,
	},
});

module.exports = mongoose.model("Sighting", SightingSchema);
