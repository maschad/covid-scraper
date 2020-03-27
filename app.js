/** @format */

const express = require("express");
const cors = require("cors");

const app = express();
const scrapeData = require("./scraper").scrapeData;

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

app.use(cors());

app.get("/", async (req, res) => {
	const results = await scrapeData();
	return res.status(200).send(results);
});

app.listen(port, () => {
	console.log(`App listening at ${host} on port ${port}!`);
});
