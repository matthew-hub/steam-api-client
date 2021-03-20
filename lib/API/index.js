const request = require('../utils/steam-api-request');
const ISteamUser = require('./ISteamUser')(request);
// eslint-disable-next-line no-unused-vars

const methods = {
  ...ISteamUser
};

console.log('[methods index]:', methods);
module.exports = methods;