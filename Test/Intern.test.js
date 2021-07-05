
const Intern = require("../lib/Intern");

//Testing input
describe("Create school", () => {
    test('It should set the school', () => {
        const testValue = "school";
        const input = new Intern();
        expect(input.school).toBe(testValue);
    });
});

//Testing retrieving input
describe("Get role", () => {
    it('It should get the role of intern', () => {
        const testValue = "intern";
        const input = new Intern();
        expect(input.getRole()).toBe(testValue);
    });
});

describe("Get school", () => {
    it('It should retrieve the school', () => {
        const testValue = "school";
        const input = new Intern();
        expect(input.getSchool()).toBe(testValue);
    });
});