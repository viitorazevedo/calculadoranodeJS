let inputResultado = document.getElementById("inputDisplayResultado");

let calculo = {
   valorSalvo: null,
    funcaoParaCalular: null
};


//adicionando evento para iniciar
window.addEventListener("load", function (){
    atribuirEventos();
})


//atribuir evento para botoes

function atribuirEventos(){
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);


    //atribuindo evento para uso do C da calculadora
    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    //atribuindo evento para uso do ponto da calculadora
    document.getElementById("btnPonto").addEventListener("click", inserirPonto);
    //atribuindo evento das operações basicas nos botoes da calculadora
    document.getElementById("btnSomar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnDividir").addEventListener("click", clicarOperador);

    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
}


//inserir numero na calculadora
function inserirNumero(){
if (isNaN(inputResultado.value)){
    inputResultado.value = event.target.textContent;
    }else{
        if(inputResultado.value == 0){
        inputResultado.value = event.target.textContent;
    }else{
        inputResultado.value += event.target.textContent;
    }
}
}

//abaixo bloco de funções de aoperações basicas: soma, subtrair, multiplicar e dividir, a divisão fazemos uma validação de divisão por 0

function somarValores(valor1, valor2){
    return valor1 + valor2;
}

function subtrairValores(valor1, valor2){
    return valor1 - valor2;
}

function multiplicarValores(valor1, valor2){
    return valor1 * valor2;
}
function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro"
    }else{
        return valor1 / valor2;
    }
}

//limpando dados do input e objeto do calculo

function limparDados(){
    inputResultado.value = "";

    calculo.valorSalvo = null;
    calculo.funcaoParaCalular = null;
}

//validações da inserção do ponto
function inserirPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
}

function clicarOperador() {
    if(!isNaN(inputResultado.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo = Number(inputResultado.value);
        }else if(calculo.funcaoParaCalular != null){
            calculo.valorSalvo = calculo.funcaoParaCalular(calculo.valorSalvo, Number(inputResultado.value));
        }
    }

    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
}

function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalular = somarValores;
    } else if(operador == "-"){
        calculo.funcaoParaCalular = subtrairValores;
    } else if(operador == "*"){
        calculo.funcaoParaCalular = multiplicarValores;
    } else {
        calculo.funcaoParaCalular = dividirValores;
    };
}

function clicarResultado(){
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalular != null){
        let resultado = calculo.funcaoParaCalular(calculo.valorSalvo, Number(inputResultado.value));

        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;

        calculo.funcaoParaCalular = null;
    }
}