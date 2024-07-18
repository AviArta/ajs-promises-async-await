/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
import savingLoaderAsync from "../app_";

jest.mock("../reader");
beforeEach(() => {
  jest.resetAllMocks();
});

/*Test("check async function savingLoaderAsync resolve", async (done) => {
    const data = await savingLoaderAsync();
    expect(data).toEqual({
            created: 1546300800,
            id: 9,
            userInfo: {
              id: 1, level: 10, name: 'Hitman', points: 2000,
            }});
        done();
    });*/

/*Test("check async function savingLoaderAsync reject", async () => {
    expect.assertions(1);
    try {
        await savingLoaderAsync();
    } catch(error) {
        expect(error.name).toEqual("getUsernameError");
    }
});*/

/*
Test("check async function savingLoaderAsync to type of object", async (done) => {
    const data = await savingLoaderAsync();
    expect(data).toBe**("GameSaving");
        done();
    });*/
