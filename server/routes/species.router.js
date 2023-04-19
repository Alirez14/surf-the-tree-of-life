const { Router } = require("express");
const SpeciesModel = require("../db/species.model");

const speciesRouter = new Router();

speciesRouter.get("/", async (req, res) => {
	const filterObject = {};
	if (req.query.searchKey) {
		filterObject.name = {
			$regex: "^" + req.query.searchKey,
			$options: "i",
		};
	}
	const species = await SpeciesModel.find(filterObject)
		.limit(100)
		.sort({ created: "asc" });
	return res.json(species);
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
