// import sumar from "./sumador";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first.value);
//   const secondNumber = Number.parseInt(second.value);

//   div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
// });

import { fizzBuzz } from "./fizzbuzz.js";

const formulario = document.querySelector("#fizzbuzz-form");
const inputNumero = document.querySelector("#numero");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const numero = Number(inputNumero.value);

    resultado.textContent = fizzBuzz(numero);
});