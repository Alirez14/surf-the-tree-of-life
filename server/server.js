require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const speciesRouter = require("./routes/species.router");

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
	console.error("Missing MONGO_URL environment variable");
	process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.use("/api/species", speciesRouter);
app.use(function (req, res) {
	res.status(200).send("server is working");
});

const main = async () => {
	await mongoose.connect(MONGO_URL);

	app.listen(PORT, () => {
		console.log("App is listening on 8080");
		console.log("Try / route right now");
	});
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
