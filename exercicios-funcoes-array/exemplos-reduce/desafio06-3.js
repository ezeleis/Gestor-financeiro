
// exemplo com objeto
const objMovimento = [
    {
        valor: 10,
        tipo: 'entrada'
    },
    {
        valor: 20,
        tipo: 'entrada'
    },
    {
        valor: 5,
        tipo: 'saida'
    }
];


const inicial = {
    entrada: 0,
    saida: 0
}

var saldoEntradaSaida = objMovimento.reduce((acumulador, atual) => {
    console.log('Valor inicial: ', inicial);
    console.log('Valor a: ', acumulador);
    console.log('Valor b: ', atual);
    console.log('\n');

    switch (atual.tipo) {
        case 'entrada':
            acumulador.entrada += atual.valor
            break;
        case 'saida':
            acumulador.saida += atual.valor
            break;
        default:
            break;
    }
    
    return acumulador;
}, inicial);

console.log(saldoEntradaSaida); 