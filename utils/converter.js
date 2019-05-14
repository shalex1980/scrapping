const fs = require('fs');
const getResults = require('../scraper');
(async () => {
  let results = awaits getResults()
  let jsonString = JSON.stringify(results);
  fs.writeFileSync('../output.json', jsonString, 'utf-8');
})