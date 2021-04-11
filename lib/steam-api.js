const apiMethods = require('./API/index');

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

  setPlayerID(id) {
    this.steamID = id;
  },

  // made to make easier for find a player ID
  parseInputData(value) {
    // create array from value 'string'
    // filter and return no empty elements
    // delete white space and '/' from passed URL
    const valueArray = value.trim().split('/').filter((el) => el);

    if (valueArray.length >= 1) {
      // check if input is a whole number ?'string'
      if (/^-?\d+$/.test(valueArray[valueArray.length - 1])) {
        // set steamID
        this.steamID = valueArray[valueArray.length - 1];
        return {
          steamID: valueArray[valueArray.length - 1],
          type: 'steamID'
        };
      }
      // set vanityID;
      this.vanityID = valueArray[valueArray.length - 1];
      return {
        vanityID: valueArray[valueArray.length - 1],
        type: 'vanityID'
      };
    }
    // error input data
    // FIXME: better approach ?
    return {
      message: '[WRONG INPUT DATA]',
      type: 'error'
    };
  },

  // FIXME: better approach ?
  ...apiMethods
};

console.log('prototype', SteamAPI.prototype);

function initializeSteamAPI(id, appid) {
  return new SteamAPI(id, appid);
}

module.exports = {
  init: initializeSteamAPI
};