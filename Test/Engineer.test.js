
const Engineer = require("../lib/Engineer");

//Testing input
describe("Set GitHub", () => {
    test('It should set Github username', () => {
        const testValue = "username";
        const input = new Engineer();
        expect(input.github).toBe(testValue);
    });
});


//Testing retrieving input
describe("Get role", () => {
    it('It should get the role of engineer', () => {
        const testValue = "engineer";
        const input = new Engineer();
        expect(input.getRole()).toBe(testValue);
    });
});

describe("Connect GitHub", () => {
    it('It should retrieve GitHub username', () => {
        const testValue = "username";
        const input = new Engineer();
        expect(input.getGithub()).toBe(testValue);
    });
});