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



class Celular {
  constructor(color, peso, tamaño, rdc, ram){
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;

  }
 presionarBotonEncendido(){
  if (this.encendido == false) {
    alert("prendiendo");
    this.encendido = true;
  } else {
    alert ("celular apagando");
    this.encendido = false;
  }
 }
reiniciar (){
  if (this.encendido == true){
    alert("reiniciando celular");
  } else {
    alert("el celular se esta apagando");
   
  }
}
tomarFotos(){
  alert(`foto tomda en una resolucion de: ${this.resolucionDeCamara} `)
}
grabarVideo(){
  alert(`grabando video en la resolucion de: ${this.resolucionDeCamara}`)
}
mostrarInfo(){
  return`
  color: <b>${this.color}</b></br>
  peso:<b>${this.peso}</b></br>
  Tamaño: <b>${this.tamaño}</b></br>
  resolucion de video: <b>${this.resolucionDeCamara}</b></br>
  memoria Ram:<b>${this.memoriaRam}</b></br>
  `;
}
}
class CelularAltaGama extends Celular{
  constructor(color,peso,tamaño,rdc,ram,rdce){
    super(color,peso,tamaño,rdc,ram);
    this.resolucionDeCamaraExtra = rdce;
  }
  grabarVideoLento() {
    alert("estas grabando en camara lenta");
  }
  reconocientoFacial(){
    alert("vamos a iniciar un reconociemto facial")
  }
  infoAltaGama(){
    return this.mobileInfo() + `resolucion de camara trasera: ${this.resolucionDeCamaraExtra}`;
  }
}

 //celular1 = new Celular("rojo", "150g", "5", "full hd", "2gb");
 //celular2 = new Celular("negro", "100g", "5", "full hd", "2gb");
 //celular3 = new Celular("azul", "120g", "5", "full hd", "2gb");
 
 //celular1.presionarBotonEncendido();
 //celular1.tomarFotos();
 //celular1.grabarVideo();
 //celular1.reiniciar();
 //celular1.presionarBotonEncendido();
celular1 = new CelularAltaGama("rojo","130g","5.2","4k", "3gb","full hd");
celular2 = new CelularAltaGama("negro","142g","6","4k","4gb","hd");
 
document.write(`
 ${celular1.mostrarInfo()} <br><br>
 ${celular2.mostrarInfo()} <br>

 `);

 class app {
  constructor(descargas, puntuacion,peso){
    this.descargas = descargas;
    this.puntuacion = puntuacion; 
    this.peso = peso;
    this.iniciada = false;
    this.instalada =false;
  }
  abrir(){
    if(this.iniciada = false) {
      this.iniciada == true;
      alert("app encendida");
    }
  }
  cerrar(){
    if(this.iniciada = true) {
      this.iniciada == false;
      alert("app cerrada");
    } 
  }
  instalar(){
    if(this.instalada == false) {
      this.instalada = true;
        alert("app instalada correctamente")
    }
  }
  desinstalar(){
    if(this.instalada == true) {
      this.instalada = false;
      alert("app desinstalada correctamente")
    }
  }
  abrir(){
    if(this.iniciada = false && this.instalada == true) {
      this.iniciada == true;
      alert("app encendida");
    }
  }
  cerrar(){
    if(this.iniciada = true && this.instalada == true) {
      this.iniciada == false;
      alert("app cerrada");
    } 
  }
  appInfo(){ 
    return true`
    descargas:<b> ${this.descargas} </b></br>
    puntuacion: <b>${this.puntuacion} </b></br>
    peso: <b> ${this.peso} </b></br>
    `
  }
  
 }
 app = new app("16000", "5 estrellas", "900mb");
  app2 = new app("16000", "4 estrellas", "750mb");
  app3 = new app("16000", "4 estrellas", "800mb");
  app4 = new app("16000", "3 estrellas", "600mb");
  app5 = new app("16000", "3.7 estrellas", "950mb");
  app6 = new app("16000", "2 estrellas", "900mb");
  app7 = new app("16000", "4.5 estrellas", "780mb");
 

 document.write(`
 ${app.appInfo()}<br>
 ${app2.appInfo()}<br>
 ${app3.appInfo()}<br>
 ${app4.appInfo()}<br>
 ${app5.appInfo()}<br>
 ${app6.appInfo()}<br>
 ${app7.appInfo()}<br>
 `);
