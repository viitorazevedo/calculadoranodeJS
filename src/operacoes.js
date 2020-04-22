function trataNumero (n) {
    return Number.parseInt(n)
}

function soma (x, y) {
    return trataNumero(x) + trataNumero(y) 
}

function subtracao (x, y) {
    return trataNumero(x) - trataNumero(y)
}

function multiplicacao (x, y) {
    return trataNumero(x) * trataNumero(y)
}

function divisao (x, y) {
    return trataNumero(x) / trataNumero(y)
}

module.exports = {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao
}