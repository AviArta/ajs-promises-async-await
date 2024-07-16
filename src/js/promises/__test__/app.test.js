import savingLoader from '../app';

// eslint-disable-next-line no-undef
test("check function savingLoader in app.js", () => savingLoader()
// eslint-disable-next-line no-undef
.then((data) => expect(data).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1, level: 10, name: 'Hitman', points: 2000,
    }
  })
));
