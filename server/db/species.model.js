// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const SpeciesSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	extinct: {
		type: Boolean,
		required: true,
	},
	importId: {
		type: Number,
		required: true,
	},
	parent: {
		type: mongoose.Schema.ObjectId,
		required: [
			function () {
				return this.importId != 1;
			},
			"The parent field is required for all nodes except the 'Life on Earth' node!",
		],
	},
	confidence: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("Species", SpeciesSchema);
