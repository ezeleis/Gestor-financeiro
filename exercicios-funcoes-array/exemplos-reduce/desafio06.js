const numeros = [2, 4, 6];
const valorInicial = 0;

// const soma = numeros.reduce(function (valorAnterior, valorAtual) { 
//     console.log('Valor anterior/acumulador: ' + valorAnterior);
//     console.log('Valor valorAtual/item: ' + valorAtual);
//     console.log('resultado p/ o acumulador: ' + (valorAnterior + valorAtual) + '\n');
//     return valorAnterior + valorAtual  
// }, valorInicial);

// console.log(soma); 

const soma = numeros.reduce(function (acumulador, valorAtual) { 
    console.log('Valor anterior/acumulador: ' + acumulador);
    console.log('Valor valorAtual/item: ' + valorAtual);
    console.log('resultado p/ o acumulador: ' + (acumulador + valorAtual) + '\n');
    return acumulador + valorAtual  
});

console.log(soma); 