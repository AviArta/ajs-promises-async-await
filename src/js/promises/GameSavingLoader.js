import GameSaving from "./GameSaving";
import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
    static load() {
      return read()
      .then(data => new GameSaving(json(data)).show)
      .catch(error => { throw Error(error.message); });
    }}
