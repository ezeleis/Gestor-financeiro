

const numeros = [1, 2, 3, 4, 5];



// [10, 20, 30, 40, 50];
const numerosMultiplicados = numeros.map(function(numero) {
    // console.log(numero * 10);
    return numero * 10
});

console.log(numeros);
console.log(numerosMultiplicados);
