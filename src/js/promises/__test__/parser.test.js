/* eslint-disable-file no-undef */
import json from "../parser";

// eslint-disable-next-line no-undef
test("check function json", () => {
    json((data) => {
        // eslint-disable-next-line no-undef
        expect(data).toEqual({
            created: 1546300800,
            id: 9,
            userInfo: {
                id: 1, level: 10, name: 'Hitman', points: 2000
            }});
        })
    });
    