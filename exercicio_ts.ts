function multiplica (num1: number, num2: number) {
    const resultado = num1 * num2;
    console.log(`O resultado da multiplicação é: ${resultado}`);
    return resultado;
}

multiplica(4350,456);


function saudacao (nome: string) {
    const falaSaudacao = "Olá " + nome + "! Tudo certo?"
    console.log(falaSaudacao);
    return falaSaudacao;
}

saudacao('Maurício S. Vasconcelos');