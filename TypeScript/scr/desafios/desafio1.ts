// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

const employee1: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'João'
};

interface employee2{
    codigo: number,
    nome: string,
    profissao?: Classifica
}

enum Classifica{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

const Paulo: employee2 = {
    codigo: 10,
    nome: 'Paulo',
    profissao: Classifica.Atriz
}