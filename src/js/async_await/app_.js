/* eslint-disable no-unused-expressions*/
import GameSavingLoaderAsync from "../async_await/GameSavingLoader_";

export default async function savingLoaderAsync() {
    try {
        await GameSavingLoaderAsync.load();
        saving => JSON.parse(saving);
    } catch(error) {
        throw Error(error);
    }
}
