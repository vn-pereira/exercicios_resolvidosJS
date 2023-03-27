// 1. Faça um loop que exiba os números de 1 a 10 usando FOR parametrizado.
var numero;
for (numero = 1; numero <= 10; numero++) {
  
  console.log(`${numero}`);
}

// 2. Faça um loop que exiba os números de 1 a 10 usando while
let num = 0;
let total = 0;
while (num < 10) {
    num++;
    total += num;
    console.log(`${num}`);
  }
 
// 3. Faça um loop que exiba os números de 1 a 10 usando do-while
let number = 0;
do {
    number += 1;
    console.log(number);
  } while (number < 10);

// 4. Escreva um programa que exiba a soma dos números de 1 a 100 usando while
let soma = 0;
let num1 = 1;
while (soma <= 100, num1++) {
   // num1++;
    soma += num1;
    console.log(`${num1}`);
  }


// 5. Escreva um programa que exiba a média de uma lista de números usando for parametrizado
const lista = [1, 2, 3, 4, 5];
let media = 0;
for (let i = 0; i < lista.length; i++) {

}
media /= lista.length;
console.log(media);

// 6. Escreva um programa que exiba o maior número de uma lista de números usando for of
const numeros = [10, 5, 3, 8, 2];
let maior = numeros[0];

console.log(maior);

// 7. Escreva um programa que exiba a soma dos números pares de uma lista de números usando for in
const numeros2 = [1, 2, 3, 4, 5, 6];
let somaPares = 0;
for (-----------) {
  if (numeros2[indice] % 2 === 0) {
    // seu codigo
  }
}
console.log(somaPares);


// 8. Escreva um programa que exiba se um número é primo ou não usando while
const numero = 7;
let primo = true;
let m = 2;

console.log(primo);