const fs = require('fs')
const path = require('path')

const ARQUIVO_LOG = path.resolve(__dirname, 'log.txt')

module.exports = function (x, y, operacao, resultado) {
    // 100 / 2 = 50
    const conteudo = x.toString() + ' ' + operacao + ' ' + y.toString() + ' = ' + resultado + '\n'

    fs.writeFileSync(
        ARQUIVO_LOG,
        conteudo,
        {
            flag: 'a' // Essa flag faz com que o arquivo não seja sobrescrito toda vez que salvamos um conteúdo novo
        }
    )
}