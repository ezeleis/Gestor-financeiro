

const array = [1, 22, 31, 40, 3, 5];

const maiorValor = array.reduce(function(acumulador, valorAtual) {
    // if (acumulador < valorAtual) {
    //     acumulador = valorAtual;
    // }
    // return acumulador
    return Math.max(acumulador, valorAtual);
});

const menorValor = array.reduce(function(acumulador, valorAtual) {
    // if (acumulador > valorAtual) {
    //     acumulador = valorAtual;
    // }
    // return acumulador
    return Math.min(acumulador, valorAtual);
});

console.log(maiorValor);
console.log(menorValor);
