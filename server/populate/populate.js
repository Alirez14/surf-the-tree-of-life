/*Loading the .env file and creates environment variables from it
 */
require("dotenv").config();
const mongoose = require("mongoose");
const treeOfLifeGraph = require("./treeoflife.json");

const speciesModel = require("../db/species.model");

console.log(process.env.MONGO_URL);
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
	console.error("Missing MONGO_URL environment variable");
	process.exit(1);
}

function sortNodesByDependencies(nodes, parentByChildren) {
	const nodeStack = Array.from(nodes);
	const sortedNodes = [];
	const sortedNodeIds = new Set();

	while (nodeStack.length > 0) {
		const nodeToAddIndex = nodeStack.findIndex(node => !(node.id in parentByChildren) 
			|| sortedNodeIds.has(parentByChildren[node.id]));
		const nodeToAdd = nodeStack[nodeToAddIndex];
		nodeStack.splice(nodeToAddIndex, 1);
		sortedNodes.push(nodeToAdd);
		sortedNodeIds.add(parseInt(nodeToAdd.id));
	}

	return sortedNodes;
}

const populateSpecies = async () => {
	await speciesModel.deleteMany({});

	const parentBySpecies = {};

	treeOfLifeGraph.links.forEach((nodeLink) => {
		parentBySpecies[nodeLink.target] = parseInt(nodeLink.source);
	});

	const confidenceById = {
		0: "confident",
		1: "incertae sedis in putative position",
		2: "incertae sedis position unspecified",
	};

	const sortedNodes = sortNodesByDependencies(treeOfLifeGraph.nodes, parentBySpecies);

	const databaseIds = {};

	for(const nodeToInsert of sortedNodes) {
		const parentId = parentBySpecies[nodeToInsert.id];
		const parentDatabaseId = databaseIds[parentId];
		const species = await speciesModel.create({
			name: nodeToInsert.name,
			extinct: nodeToInsert.EXTINCT === "1",
			importId: parseInt(nodeToInsert.id),
			parent: parentDatabaseId,
			confidence: confidenceById[nodeToInsert.CONFIDENCE],
		});
		databaseIds[nodeToInsert.id] = species._id;
	}
	console.log("Species created");
};

const main = async () => {
	await mongoose.connect(mongoUrl);

	await populateSpecies();

	await mongoose.disconnect();
};

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
