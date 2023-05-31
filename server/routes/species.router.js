const { Router } = require("express");
const SpeciesModel = require("../db/species.model");
const speciesModel = require("../db/species.model");

const speciesRouter = new Router();

speciesRouter.get(["/", "/:filterName"], async (req, res) => {
	const filterName = req.params.filterName;
	const filterObject = filterName
		? { name: { $regex: "^" + filterName, $options: "i" } }
		: {};
	const species = await SpeciesModel.find(filterObject)
		.limit(100)
		.sort({ created: "asc" });
	return res.json(species);
});

speciesRouter.patch("/:speciesId", async (req, res) => {
	const speciesId = req.params.speciesId;
	const comment = req.body.comment;
	await speciesModel.updateOne({ _id: speciesId }, { comment: comment });
	return res.json({ message: "comment updated" });
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
