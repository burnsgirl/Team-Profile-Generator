
const Employee = require("../lib/Employee");

// Testing input
describe("Create Employee", () => {
    test('It should take generate a new employee', () => {
        const input = new Employee();
        expect(typeof input).toBe("object");
    });
});

describe("Create Name", () => {
    test('It should take input for name', () => {
        const testValue = "name";
        const input = new Employee(testValue);
        expect(input.name).toBe(testValue);
    });
});

describe("Create ID", () => {
    test('It should take input for ID', () => {
        const input = new Employee(testValue);
        const testValue = 1
        expect(input.id).toBe(testValue);
    });
});

describe("Create Email", () => {
    test('It should take input for email', () => {
        const input = new Employee(testValue);
        const testValue = "abc@test.com";
        expect(input.email).toBe(testValue);
    });
});

//Testing retrieving input
describe("Get Name", () => {
    it('It should get name input', () => {
        const testValue = "Dauphine";
        const input = new Employee(testValue);
        expect(input.getName()).toBe(testValue);
    });
});

describe("Get ID", () => {
    it('It should get ID input', () => {
        const input = new Employee(testValue);
        const testValue = 1
        expect(input.getId()).toBe(testValue);
    });
});

describe("Get Email", () => {
    it('It should get email input', () => {
        const input = new Employee(testValue);
        const testValue = "abc@test.com";
        expect(input.getEmail()).toBe(testValue);
    });
});

describe("Get Role", () => {
    it('It should take  input for role', () => {
        const testValue = "employee";
        const input = new Employee ("Dauphine" , 1, "abc@test.com");
        expect(input.getRole()).toBe(testValue);
    });
});

    