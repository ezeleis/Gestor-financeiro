	
const veiculos = [
    {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: '2011',
        batido: false
    },
    {
        marca: 'Volkswagen',
        modelo: 'Gol G2',
        ano: '2002',
        batido: false
    },
    {
        marca: 'Renault',
        modelo: 'Logan',
        ano: '2013',
        batido: true
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: '2012',
        batido: true
    },
];


const carrosSemBatida = veiculos
    .filter(checaCarroBatido)
    .forEach(carro => console.log(carro.modelo))


// console.log('Carros NÃO batidos: ',carrosSemBatida);

// carrosSemBatida.forEach(carro => console.log(carro.modelo))


const carrosBatidos = veiculos.filter(function (carro) {
    return carro.batido === true
});

// console.log('Carros batidos: ',carrosBatidos);

function checaCarroBatido(carro) {
    // return carro.batido === false
        return !carro.batido
}