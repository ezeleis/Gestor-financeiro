// Carros:
// 	Fiat - Uno - 2011
// 	Volkswagen - Gol G2 - 2002
// 	Renault - Logan - 2013
// 	Toyota - Corolla - 2012
	
const carros = [
    {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: '2011'
    },
    {
        marca: 'Volkswagen',
        modelo: 'Gol G2',
        ano: '2002'
    },
    {
        marca: 'Renault',
        modelo: 'Logan',
        ano: '2013'
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: '2012'
    },
];


	
// Imprima os carros por cada propriedade
// 	marca: X 
// 	modelo: Y
// 	ano: Z


carros.forEach(function(carro) {
    // Processar alguma coisa baseado em cada elemento
    // console.log('ID: ' + indice);
    console.log('marca: ' + carro.marca);
    console.log('modelo: ' + carro.modelo);
    console.log('ano: ' + carro.ano);
    // console.log('array: ' + JSON.stringify(lista));
    console.log('\n');
});

// function imprimirDetalhado(carro, indice) {
//     // Processar alguma coisa baseado em cada elemento
//     console.log('ID: ' + indice);
//     console.log('marca: ' + carro.marca);
//     console.log('modelo: ' + carro.modelo);
//     console.log('ano: ' + carro.ano);
//     console.log('\n');
// }

const numeros = [1, 2];

console.log(numeros.forEach(function (numero) {
    return numero;
}));
