// const numeros = [2, 4, 6, 1];
// const todosNumerosPares = numeros.every(function (numero) {
//     // retorna a condicao
//     return numero % 2 == 0
// });
// console.log(todosNumerosPares);



const numeros = [];


const avaliacao = numeros.every(function (numero) {
    // retorna a condicao
    return numero % 2 == 0
});

const temNumeros = numeros.length == 0 ? false : avaliacao;

console.log('tem ', temNumeros);