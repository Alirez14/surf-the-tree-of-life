// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const IndividualsSchema = new Schema({
	name: {
		type: String,
		required: true 
	},
	species: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Individuals", IndividualsSchema);
