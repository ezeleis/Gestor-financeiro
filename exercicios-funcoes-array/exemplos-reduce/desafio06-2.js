
// let saldoAnterior = 100;

// const receitaDiaria = [10, 20, 30];

// var saldoDoDia = receitaDiaria.reduce((a, b) => {
//     console.log('Valor inicial: ', saldoAnterior);
//     console.log('Valor a: ', a);
//     console.log('Valor b: ', b);
//     console.log('saída: ', a + b);
//     console.log('\n');
//     return a + b
// }, saldoAnterior);

// console.log(saldoDoDia);



// let saldoAtual = 100;
// const gastosDiarios = [10, 20, 30];

// var saldoAposDesconto = gastosDiarios.reduce((a, b) => {
//     console.log('Valor inicial: ', saldoAtual);
//     console.log('Valor a: ', a);
//     console.log('Valor b: ', b);
//     console.log('saída: ', a - b);
//     console.log('\n');
//     return a - b
// }, saldoAtual);

// console.log(saldoAposDesconto);



// COM OS DOIS
// let saldoAnterior = 100;
// const receitaDiaria = [10, 20, 30]; // 60
// const despesas = [-100, -220]; // 320

// const movimento = receitaDiaria.concat(despesas);
// console.log(movimento);

// var saldoDoDia = movimento.reduce((a, b) => {
//     console.log('Valor inicial: ', saldoAnterior);
//     console.log('Valor a: ', a);
//     console.log('Valor b: ', b);
//     console.log('resultado: ', a + b);
//     console.log('\n');
//     a = a + b;
//     return a;
// }, saldoAnterior);

// console.log(saldoDoDia); // -160