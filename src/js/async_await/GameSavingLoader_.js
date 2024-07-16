import GameSaving from "../promises/GameSaving";
import json from "../promises/parser";
import read from "../promises/reader";

export default class GameSavingLoaderAsync {
  static async load() {
    try {
      const data = await read();
      return new GameSaving(json(data)).show;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
