/** @format */

const express = require("express");
const app = express();
const scrapeData = require("./scraper").scrapeData;

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	const results = await scrapeData();
	res.status(200).send(results);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
