

// const numeros = [1, 2, 3, 4];
const numeros = [3, 5, 8, 11, 12, 20];

// const pares = numeros.filter(function (numero) {
//     return numero % 2 === 0;
// });
// console.log('Numeros pares: ', pares);

const primeiroPar = numeros.find(function (numero) {
    return numero % 2 === 0;
});

console.log('Primeiro número par: ', primeiroPar);

const temNumeroVinte = numeros.find(function (numero) {
    return numero === 20;
});

console.log('Tem o numero 20 ? ', temNumeroVinte ? 'Tem ' : 'Não tem');