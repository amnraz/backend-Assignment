// urlparser.js
const url = require('url');

function parseURL(fullURL) {
  const parsed = url.parse(fullURL, true); 
  return {
    hostname: parsed.hostname,
    pathname: parsed.pathname,
    query: parsed.query
  };
}

module.exports = { parseURL };
