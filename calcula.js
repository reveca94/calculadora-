const texto1 = document.getElementById("op1")
const texOperador = document.getElementById("operador")
const texto2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

console.log(texto2)

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






const sumar = (num1, num2)=> {
  return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2)=> {
  return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2)=> {
  return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2)=> {
  return parseInt(num1) * parseInt(num2);
}
alert("¿que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");
 
if (operacion == 1) {
  let numero1 = prompt("primero numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  total = sumar(numero1,numero2);
  alert(`tu total es ${total}`);
 }
 else if (operacion == 2) {
  let numero1 = prompt("primero numero para restar");
  let numero2 = prompt("segundo numero para restar");
  total = restar(numero1,numero2);
  alert(`tu total es ${total}`);
 }
 else if (operacion == 3) {
  let numero1 = prompt("primero numero para multiplicar");
  let numero2 = prompt("segundo numero para multiplicar");
  total = multiplicar(numero1,numero2);
  alert(`tu total es ${total}`);
 }
 else if (operacion == 4) {
  let numero1 = prompt("primero numero para dividir");
  let numero2 = prompt("segundo numero para dividir");
  total = dividir(numero1,numero2);
  alert(`tu total es ${total}`);
 }
 else {
  alert("nose a encontrado la operacion")
 }