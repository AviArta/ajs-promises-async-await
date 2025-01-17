export default class GameSaving {
    // eslint-disable-next-line max-params
    constructor(id, userInfoId, userInfoName, userInfoLevel, userInfoPoints) {
        this.id = id;
        this.userInfoId = userInfoId;
        this.userInfoName = userInfoName;
        this.userInfoLevel = userInfoLevel;
        this.userInfoPoints = userInfoPoints
    }
    created = Date.now();

    get show() {
      return {
        "id": this.id,
        //// eslint-disable-next-line sort-keys
        //"created": this.created,
        "userInfo": {
          "id": this.userInfoId, 
          "level": this.userInfoLevel,
          "name": this.userInfoName,
          "points": this.userInfoPoints
        }
    }
  }
}
