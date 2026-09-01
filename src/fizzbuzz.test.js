import { fizzBuzz } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    test("debería devolver el mismo número cuando no es múltiplo de 3 ni de 5", () => {
        expect(fizzBuzz(1)).toBe("1");
    });

    test("debería devolver Fizz cuando el número es 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    test("debería devolver Buzz cuando el número es 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    test("debería devolver FizzBuzz cuando el número es 15", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    test("debería devolver Fizz para múltiplos de 3", () => {
        expect(fizzBuzz(6)).toBe("Fizz");
    });

    test("debería devolver Buzz para múltiplos de 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });

    test("debería devolver FizzBuzz para múltiplos de 3 y 5", () => {
        expect(fizzBuzz(30)).toBe("FizzBuzz");
    });
});