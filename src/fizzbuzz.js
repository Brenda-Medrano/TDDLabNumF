export function fizzBuzz(numero) {
    if (numero === 3) {
        return "Fizz";
    }

    if (numero === 5) {
        return "Buzz";
    }

    return numero.toString();
}