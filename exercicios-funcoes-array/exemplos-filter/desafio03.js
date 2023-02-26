// const numeros = [1, 2, 3, 4];
const numeros = [3, 5, 11];

const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

console.log(numeros);
console.log(pares);

if (pares.length === 0) {
    console.log('Não tem nenhum número par nessa lista');
}