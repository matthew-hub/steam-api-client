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
      return data.response.players[0];
    });
  },

  resolveVanityURL(vanityid) {
    return request({
      method: 'ResolveVanityURL',
      id: vanityid,
      domainURL: this.domainURL
    }).then((data) => {
      this.steamID = data.response.steamid;
      return data.response;
    });
  },

  getPlayerBans(steamid) {
    return request({
      method: 'GetPlayerBans',
      id: steamid || this.steamID,
      domainURL: this.domainURL
    }).then((data) => {
      this.playerBans = {
        ...data.players[0]
      };

      return data.players[0];
    });
  },

  getFriendList(steamid) {
    return request({
      method: 'GetFriendList',
      id: steamid || this.steamID,
      domainURL: this.domainURL
    }).then((data) => {
      this.friendsList = data.friendslist.friends;
      return data.friendslist.friends;
    });
  }

});