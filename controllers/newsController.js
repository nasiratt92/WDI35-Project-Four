const rp = require('request-promise');
const {newsApiKey} = require('../config/environment');

function newsIndex(req, res, next) {
  console.log('Hey! made it to backend URL news api controller');
  rp({
    method: 'GET',
    url: `https://newsapi.org/v2/everything?q=new%20soft%20drink&apiKey=${newsApiKey}`,
    // "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c6683032fb904a9cb0ff43714d6a1931"
    json: true
  })
    .then(response => res.json(response.articles))
    .catch(next);
}


module.exports = {index: newsIndex};
