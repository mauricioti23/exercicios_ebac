"use strict";

var alunos = ["Marcio", "Aline", "Anderson", "Jeovana"];
var notaAlunos = [8, 5, 7, 10];
var alunosComNotas = alunos.map(function (nome, indice) {
  return {
    nome: nome,
    nota: notaAlunos[indice]
  };
});
console.log(alunosComNotas);
function filtrarAprovados(lista) {
  return lista.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = filtrarAprovados(alunosComNotas);
console.log(aprovados);