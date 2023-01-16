const texto1 = document.getElementById("op1")
const texOperador = document.getElementById("operador")
const texto2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

//console.log(texto2)

btnCalcular.addEventListener('click', calcular)


function calcular (){
    const operador = texOperador.value
    const op1 = parseFloat (texto1.value)
    const op2 = parseFloat (texto2.value)


    if((operador == "+" || operador == "-" || operador =="*" || 
    operador == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operador){
            case"+":
            resultado = op1 + op2
            break;
            case"-":
            resultado = op1 - op2
            break;
            case"*":
            resultado = op1 * op2
            break;
            case"/":
            resultado = op1 / op2
            break
        }
        pResultado.style = "color:black"
        pResultado.innerText = "=" + resultado
        }else{
            pResultado.style = "color:red"
            pResultado.innerText = "calculo imposible"
        }
    }