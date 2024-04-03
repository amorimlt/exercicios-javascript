// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum (y, x) {
    return y + x;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var plusfive = sum(5, 5) + 5;

// Declare uma nova variável, sem valor.
var novalue

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addvalue() {
    novalue = 13;
    return 'O valor da variável agora é ' + novalue;
}

// Invoque a função criada acima.
addvalue();

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiply (a, b, c) {
    if(a === undefined || b === undefined || c === undefined) {
        return 'Preencha todos os valores corretamente!';} 
    {return a * b * c + 2}
}

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgs (a, b, c) {
    if(a !== undefined && b === undefined && c === undefined) {
        return 'Esse é o valor de ' + a;
    } else if (a !== undefined && b !== undefined && c === undefined) {
        return 'O produto da soma desses dois valores é: ' + (a + b);
    } else if (a !== undefined && b !== undefined && c !== undefined) {
        return 'O produto da soma do primeiro com o segundo, e o resultado, dividido pelo terceiro é: ' + (a + b) / c;
    } else if (a === undefined && b === undefined && c === undefined) {
        return false;
    } else {
        return null;
    }
}