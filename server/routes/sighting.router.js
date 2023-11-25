const { Router } = require("express");
const SightingModel = require("../db/sighting.model");

const sightingsRouter = new Router();

sightingsRouter.get(["/"], async (req, res) => {
	const sightings = await SightingModel.find();
	return res.json(sightings);
});

sightingsRouter.post(["/"], async (req, res) => {
	const sighting = await SightingModel.create(req.body);
	return res.json(sighting);
});

sightingsRouter.delete("/:sightingId", async (req, res) => {
	const sightingId = req.params.sightingId;
	const sighting = await SightingModel.findByIdAndDelete(sightingId);
	const sightings = await SightingModel.find();
	return res.json(sightings);
});

module.exports = sightingsRouter;
