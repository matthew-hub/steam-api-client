module.exports = (request) => ({
  getPlayerSummaries(steamid) {
    return request({
      method: 'GetPlayerSummaries',
      id: steamid || this.steamID,
      domainURL: this.domainURL
    }).then((data) => {
      this.playerSummaries = {
        ...data.response.players[0]
      };
      return this.playerSummaries;
    });
  },

  resolveVanityURL(vanityid) {
    return request({
      method: 'ResolveVanityURL',
      id: vanityid,
      domainURL: this.domainURL
    }).then((data) => {
      this.steamID = data.response.steamid;

      return this.steamID;
    });
  },

  getPlayerBans(steamid) {
    return request({
      method: 'GetPlayerBans',
      id: steamid || this.steamID,
      domainURL: this.domainURL
    }).then((data) => {
      // eslint-disable-next-line prefer-destructuring
      this.playerBans = data.players[0];
      return this.playerBans;
    });
  },

  getFriendList(steamid) {
    return request({
      method: 'GetFriendList',
      id: steamid || this.steamID,
      domainURL: this.domainURL
    }).then((data) => {
      // eslint-disable-next-line prefer-destructuring
      this.friendsList = data.friendslist.friends;
      return this.friendsList;
    });
  }

});