// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const SpeciesSchema = new Schema({
	name: String,
	extinct: Boolean,
	_id: Number,
	parent: Number,
	confidence: String,
});

module.exports = mongoose.model("Species", SpeciesSchema);
