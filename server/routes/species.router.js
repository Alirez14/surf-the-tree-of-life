const { Router } = require("express");
const SpeciesModel = require("../db/species.model");

const speciesRouter = new Router();

speciesRouter.get("/", async (req, res) => {
	const species = await SpeciesModel.find().sort({ created: "asc" });
	return res.json(species);
});

module.exports = speciesRouter;
