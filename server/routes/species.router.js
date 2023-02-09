const { Router } = require("express");
const SpeciesModel = require("../db/species.model");

const speciesRouter = new Router();

speciesRouter.get("/", async (req, res) => {
	const species = await SpeciesModel.find()
		.limit(100)
		.sort({ created: "asc" });
	res.json(species);
});

module.exports = speciesRouter;
