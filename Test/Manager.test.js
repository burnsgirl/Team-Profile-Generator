
const Manager = require("../lib/Manager");

//Testing input
describe("Set office number", () => {
    test('It should set office number', () => {
        const testValue = 1;
        const input = new Manager();
        expect(input.officeNum).toBe(testValue);
    });
});

//Testing retrieving input
describe("Get role", () => {
    it('It should get the role of manager', () => {
        const testValue = "manager";
        const input = new Manager();
        expect(input.getRole()).toBe(testValue);
    });
});

describe("Get office number", () => {
    it('It should retrieve office number', () => {
        const testValue = 1;
        const input = new Manager();
        expect(input.getOfficeNum()).toBe(testValue);
    });
});