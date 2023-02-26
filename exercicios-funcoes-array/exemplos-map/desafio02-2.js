

const pessoas = [
    {
        nome: 'Joaquim',
        anoNascimento: 2019
    },
    {
        nome: 'Maria',
        anoNascimento: 2006
    }
];

const pessoasComIdades = 
    pessoas
    .map(function(pessoa) {
        return {
            ...pessoa
        }
    }) // cópia do objeto/array [ { nome: 'Joaquim', anoNascimento: 2019 }, { nome: 'Maria', anoNascimento: 2006 }]
    .map(function (pessoa) {
        pessoa.idade = 2023 - pessoa.anoNascimento;
        return pessoa;
        
        // console.log(pessoa);
        // return pessoa;

        // return {
        //     name: pessoa.nome,
        //     year: pessoa.anoNascimento,
        //     age: 2023 - pessoa.anoNascimento
        // }
    });

console.log(pessoas);
console.log(pessoasComIdades);

