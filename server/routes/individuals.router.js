const { Router } = require("express");
const Individuals = require("../db/individuals.model");


const individualsRouter = new Router();

individualsRouter
    .get("/", async function (request, response) {
        const { sortBy, sortOrder } = request.query
        const sortOptions = {}
        sortOptions[sortBy] = sortOrder
        const individuals = await Individuals.find({}).sort(sortOptions)
        response.json(individuals)
    })
    .post("/", async function(request, response) {
        const newIndividual = new Individuals(request.body);
        await newIndividual.save();
        response.json(newIndividual);
    });

individualsRouter.get("/:id", async function(request, response) {
    const individual = await Individuals.findById(request.params.id);
    response.json(individual);
}).put("/:id", async function (request, response) {
    const individual = request.body
    const updatedIndividual = await Individuals.updateOne({_id: request.params.id }, individual)
    response.json(updatedIndividual)
});

module.exports = individualsRouter;