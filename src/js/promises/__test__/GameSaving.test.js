/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
import GameSaving from "../GameSaving"

test("check create object of class GameSaving", () => {
    const expected = new GameSaving(9, 1, "Hitman", 10, 2000);
    expect(expected.show).toEqual({
        id: 9,
        userInfo: {
          id: 1, level: 10, name: 'Hitman', points: 2000,
        }});
})
