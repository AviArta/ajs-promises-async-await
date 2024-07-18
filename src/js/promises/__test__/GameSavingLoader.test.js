/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
import GameSaving from "../GameSaving";
import GameSavingLoader from '../GameSavingLoader';
import savingLoader from '../app';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test("check class GameSavingLoader.load (reject)", () => {
    expect.assertions(1);
    try {
        GameSavingLoader.load();
    } catch(error) {
        expect(error.name).toEqual("TypeError");
    }
  });
/*
// eslint-disable-next-line no-undef
test("check GameSavingLoader.load)", (resolve) => {
  // eslint-disable-next-line no-undef
  expect(GameSavingLoader.load()).toBeInstanceOf(GameSaving);
})*/
/*
// eslint-disable-next-line no-undef
test("check function savingLoader", () => savingLoader()
// eslint-disable-next-line no-undef
.then((data) => expect(data).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1, level: 10, name: 'Hitman', points: 2000,
    }
  })
));*/
