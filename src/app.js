const express = require('express')
const fs = require('fs')
const path = require('path')
const operacoes = require('./operacoes')
const logger = require('./logger')

const app = express()

app.use(express.json()) // Definimos isso para conseguir tratar os dados recebidos em JSON (enviados pelo Axios)

// 5) Implementar um arquivo chamado app.js que quando digitar no brower o path / abra o form.html
app.set('view engine', 'ejs') // Indica ao Express que queremos usar o EJS como engine de renderização
app.set('views', path.resolve(__dirname, 'telas')) // Indica ao Express que o ./telas vai ser nosso diretório de views

// Definição da rota do /, onde o form.ejs vai ser renderizado
app.get('/', function (req, res) {
    res.render('form')
})

app.post('/soma', function (req, res) {
    // No body é onde encontramos os dados que enviamos pelo formulário
    // ou seja, o x e o y
    const body = req.body

    // Calcula a soma
    const resultado = operacoes.soma(body.x, body.y)

    // Salva no arquivo de log
    logger(body.x, body.y, '+', resultado)

    // Retorna resultado da request
    res.json(resultado) // res.json, pois res.send não envia números!
})

app.post('/subtracao', function (req, res) {
    // No body é onde encontramos os dados que enviamos pelo formulário
    // ou seja, o x e o y
    const body = req.body

    // Calcula a subtração
    const resultado = operacoes.subtracao(body.x, body.y)

    // Salva no arquivo de log
    logger(body.x, body.y, '-', resultado)

    // Retorna resultado da request
    res.json(resultado) // res.json, pois res.send não envia números!
})

app.post('/multiplicacao', function (req, res) {
    // No body é onde encontramos os dados que enviamos pelo formulário
    // ou seja, o x e o y
    const body = req.body

    // Calcula a multiplicação
    const resultado = operacoes.multiplicacao(body.x, body.y)

    // Salva no arquivo de log
    logger(body.x, body.y, '*', resultado)

    // Retorna resultado da request
    res.json(resultado) // res.json, pois res.send não envia números!
})

app.post('/divisao', function (req, res) {
    // No body é onde encontramos os dados que enviamos pelo formulário
    // ou seja, o x e o y
    const body = req.body

    // Calcula a divisão
    const resultado = operacoes.divisao(body.x, body.y)

    // Salva no arquivo de log
    logger(body.x, body.y, '/', resultado)

    // Retorna resultado da request
    res.json(resultado) // res.json, pois res.send não envia números!
})

// 7) Implemente a rota (app.js) /log exibir o conteúdo do arquivo log.txt (html)
app.get('/log', function (req, res) {
    const ARQUIVO_LOG = path.resolve(__dirname, 'log.txt')

    const conteudoArquivo = fs.readFileSync(ARQUIVO_LOG).toString()

    res.send(conteudoArquivo)
})

module.exports = app;