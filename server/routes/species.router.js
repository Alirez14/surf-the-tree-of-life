const { Router } = require("express");
const SpeciesModel = require("../db/species.model");

const speciesRouter = new Router();

//https://stackoverflow.com/questions/24348437/mongoose-select-a-specific-field-with-find
speciesRouter.get(["/name"], async (req, res) => {
	const species = await SpeciesModel.find()
		.select("name")
		.sort({ name: "asc" })
		.limit(100);
	return res.json(species);
});

speciesRouter.get(["/", "/:searchParam"], async (req, res) => {
	const filterObject = req.params.searchParam
		? { name: { $regex: "^" + req.params.searchParam, $options: "i" } }
		: {};
	const species = await SpeciesModel.find(filterObject)
		.limit(100)
		.sort({ name: "asc" });
	return res.json(species);
});

speciesRouter.patch("/:speciesId", async (req, res) => {
	const speciesId = req.params.speciesId;
	const update = req.body;
	const updatedSpecies = await SpeciesModel.findByIdAndUpdate(
		speciesId,
		update
	);
	return res.json(updatedSpecies);
});

// speciesRouter.get("/:speciesId", async (req, res) => {
// 	const speciesId = req.params.speciesId
// 	const species = await SpeciesModel
// 		.findOne({importId: speciesId})
// 	return res.json(species);
// });

// speciesRouter.get("/:speciesId/descendants", async (req, res) => {
// 	const queryParams = req.query;
// 	const speciesId = req.params.speciesId
// 	const species = await SpeciesModel
// 		.findOne({importId: speciesId})

// 	const descendants = await SpeciesModel
// 		.find({parent: species._id})
// 		.sort({[queryParams.sortBy]: queryParams.sortOrder === "asc" ? 1 : -1});
// 	return res.json(descendants);
// });

module.exports = speciesRouter;
