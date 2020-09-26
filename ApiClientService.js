const fetch = require('node-fetch');

function getShuttles() {
  return fetch('http://localhost:3000/shuttles').then((response) =>
    response.json(),
  );
}

module.exports = {
  getShuttles,
};
