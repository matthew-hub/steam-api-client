/* eslint-disable no-unused-vars */
// eslint-disable-next-line prefer-const
let apiMethods = require('./API/index');

console.log('api-methhods', apiMethods);

function SteamAPI(id, appid) {
  this.steamID = id;
  this.appID = appid;
  this.domainURL = '';
  console.log('thsi', this);
}

SteamAPI.prototype = {
  setDomainURL(url) {
    this.domainURL = url;
  },

  setID(arg) {
    this.steamID = arg;
    return this;
  }
};

Object.assign(SteamAPI.prototype, apiMethods);
// FIXME: better approach ?

console.log('prototype', SteamAPI.prototype);

function initializeSteamAPI(id, appid) {
  return new SteamAPI(id, appid);
}

module.exports = {
  init: initializeSteamAPI
};