const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = 'https://www.amazon.com/Fluval-Carbon-Cartridge-Filter-Media/dp/B07NWY7CS1/';


const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
}

const getResults = async () => {
  const $ = await fetchData();
 
  return {
    title: $('#productTitle').text(),
    price: $('#priceblock_ourprice').text(),
    BSR: $('#SalesRank').text(),
    categories: $('.a-list-item > a').text(),
    siteName: $('span.nav-logo-base').text(),
  }
}

module.exports = getResults;