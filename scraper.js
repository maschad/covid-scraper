/** @format */

const axios = require("axios");
const cheerio = require("cheerio");
const countryList = require("./countryList").countryList;

const defaultUrl =
	"https://en.wikipedia.org/wiki/Travel_restrictions_related_to_the_2019%E2%80%9320_coronavirus_pandemic";

// Store countries in dictionary for quicker look up
const dict = {};
countryList.forEach((el, index) => (dict[el] = index));

module.exports.scrapeData = function(url = defaultUrl) {
	axios(url)
		.then(response => {
			const html = response.data;
			const $ = cheerio.load(html);

			const countriesBannedFlights = {};
			let elementToTraverse = $("h3");

			while ((elementToTraverse = elementToTraverse.next())) {
				if (
					elementToTraverse.length === 0 ||
					elementToTraverse.prop("tagName") === "H2"
				)
					break;
				if (elementToTraverse.prop("tagName") === "UL") {
					elementToTraverse.children().each((index, childElement) => {
						const countryTitle = $(childElement)
							.find("a")
							.attr("title");

						if (countryTitle === undefined) return;

						if (dict[countryTitle]) {
							const travelInfo = $(childElement)
								.text()
								.replace(/\[([0-9]+)\]/g, "");
							if (countriesBannedFlights[countryTitle] === undefined) {
								countriesBannedFlights[countryTitle] = [travelInfo];
							} else {
								countriesBannedFlights[countryTitle].push(travelInfo);
							}
						}
					});
				}
			}
			return countriesBannedFlights;
		})
		.catch(console.error);
};
