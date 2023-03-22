const { Router } = require("express");
const SpeciesModel = require("../db/species.model");

const speciesRouter = new Router();

speciesRouter.get("/", async (req, res) => {
	const queryParams = req.query.name;
	let filter = {};
	if (queryParams !== undefined) { 
		filter = {
			 name: { $regex: "^" + queryParams, $options: "i" },
		}
	}
	const species = await SpeciesModel.find(filter)
		.limit(100)
		.sort({ created: "asc" });
	return res.json(species);
});

speciesRouter.get("/tree/:speciesId", async (req, res) => {
	const speciesId = req.params.speciesId;
	const species = await SpeciesModel.findOne({ importId: speciesId });
	return res.json(species);
});

speciesRouter.get("/tree/:speciesId/descendants", async (req, res) => {
	const queryParams = req.query;
	const speciesId = req.params.speciesId;
	const species = await SpeciesModel.findOne({ importId: speciesId });

	const descendants = await SpeciesModel.find({ parent: species._id }).sort({
		[queryParams.sortBy]: queryParams.sortOrder === "asc" ? 1 : -1,
	});
	return res.json(descendants);
});

module.exports = speciesRouter;
