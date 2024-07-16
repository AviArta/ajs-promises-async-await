import GameSavingLoader from '../GameSavingLoader';

// eslint-disable-next-line no-undef
jest.mock('../reader');

// eslint-disable-next-line no-undef
beforeEach(() => {
  // eslint-disable-next-line no-undef
  jest.resetAllMocks();
});

// eslint-disable-next-line no-undef
test("check class GameSavingLoader (reject)", () => {
    // eslint-disable-next-line no-undef, no-magic-numbers
    expect.assertions(1);
    try {
        GameSavingLoader.load();
    } catch(error) {
        // eslint-disable-next-line no-undef
        expect(error.name).toEqual("TypeError");
    }
  });
