
const Intern = require("../lib/Intern");

//Testing input
describe("Create school", () => {
    test('It should set the school', () => {
        const testValue = "school";
        const e = new Intern("Dauphine", 1, "abc@test.com", testValue);
        expect(e.school).toBe(testValue);
    });
});

//Testing retrieving input
describe("Get role", () => {
    it('It should get the role of intern', () => {
        const testValue = "Intern";
        const e = new Intern("Dauphine", 1, "abc@test.com", "school");
        expect(e.getRole()).toBe(testValue);
    });
});

describe("Get school", () => {
    it('It should retrieve the school', () => {
        const testValue = "school";
        const e = new Intern("Dauphine", 1, "abc@test.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    });
});