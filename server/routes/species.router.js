const { Router } = require("express");
const SpeciesModel = require("../db/species.model");

const speciesRouter = new Router();

speciesRouter.get("/", async (req, res) => {
	const species = await SpeciesModel.find()
		.limit(100)
		.sort({ created: "asc" });
	return res.json(species);
});

speciesRouter.get("/:speciesId", async (req, res) => {
	const speciesId = req.params.speciesId
	const species = await SpeciesModel
		.findOne({importId: speciesId})
	return res.json(species);
});

speciesRouter.get("/:speciesId/descendants", async (req, res) => {
	const speciesId = req.params.speciesId
	const species = await SpeciesModel
		.findOne({importId: speciesId})

	const descendants = await SpeciesModel
		.find({parent: species._id});
	return res.json(descendants);
});

module.exports = speciesRouter;
