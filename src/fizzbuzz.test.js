import { fizzBuzz } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    test("debería devolver el mismo número cuando no es múltiplo de 3 ni de 5", () => {
        expect(fizzBuzz(1)).toBe("1");
    });

    test("debería devolver Fizz cuando el número es 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
});