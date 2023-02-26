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


// Funcao JS 
carros.forEach(function(carro) {
    console.log('marca: ' + carro.marca);
    console.log('modelo: ' + carro.modelo);
    console.log('ano: ' + carro.ano);
    console.log('\n');
});

// Arrow Functions -> ES6 - JS MODERNO
carros.forEach((carro) => {
    console.log('marca: ' + carro.marca);
    console.log('modelo: ' + carro.modelo);
    console.log('ano: ' + carro.ano);
    console.log('\n');
});

// Arrow Functions -> ES6 - JS MODERNO -> Syntax Sugar
carros.forEach((carro) => console.log('marca: ' + carro.marca));



const imprimir = function(carro) {
    console.log('marca: ' + carro.marca);
    console.log('modelo: ' + carro.modelo);
    console.log('ano: ' + carro.ano);
    console.log('\n');
}

// Arrow function
const numeros = [1, 2, 3, 4];
const numerosVezes2 = numeros.map((numero) =>  numero * 2);
console.log(numerosVezes2);




// const numeros = [1, 2];

// console.log(numeros.forEach(function (numero) {
//     return numero;
// }));
