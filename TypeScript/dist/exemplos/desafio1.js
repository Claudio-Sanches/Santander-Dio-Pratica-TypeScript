"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";
const employee1 = {
    codigo: 10,
    nome: 'João'
};
var Classifica;
(function (Classifica) {
    Classifica[Classifica["Professora"] = 0] = "Professora";
    Classifica[Classifica["Atriz"] = 1] = "Atriz";
    Classifica[Classifica["Desenvolvedora"] = 2] = "Desenvolvedora";
    Classifica[Classifica["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Classifica || (Classifica = {}));
const Paulo = {
    codigo: 10,
    nome: 'Paulo',
    profissao: Classifica.Atriz
};
