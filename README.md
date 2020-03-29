<!-- @format -->

# COVID-19 Scraper

## Description

A `Node.js` scraper using `cheerio` to scrape [wikipedia](https://en.wikipedia.org/wiki/Travel_restrictions_related_to_the_2019%E2%80%9320_coronavirus_pandemic) for latest **COVID-19** info.

### [A demo here](https://covid19-scraper.herokuapp.com/)

## Instructions

If you have [Docker](https://www.docker.com/) then:

- Build an image
  ```
  docker build -t <your username>/scraper
  ```
- Run that image

  ```
  docker run -p 49160:3000 -d <your username>/scraper
  ```

- Get the info :)

  ```
  curl -i localhost:49160
  ```

### NPM/Yarn

```
 cd scraper && npm i  / yarn
```
