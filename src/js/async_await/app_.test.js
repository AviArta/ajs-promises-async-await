import savingLoaderAsync from "./app_";

// eslint-disable-next-line no-undef
test("check async function savingLoaderAsync resolve", async (done) => {
    const data = await savingLoaderAsync();
    // eslint-disable-next-line no-undef
    expect(data).toEqual({
            created: 1546300800,
            id: 9,
            userInfo: {
              id: 1, level: 10, name: 'Hitman', points: 2000,
            }});
        done();
    });

// eslint-disable-next-line no-undef
test("check async function savingLoaderAsync reject", async () => {
    try {
        await savingLoaderAsync();
    } catch(error) {
        //Console.log(error.name);
        // eslint-disable-next-line no-undef
        expect(error.name).toEqual("TypeError");
    }
});
