const prompt = require("prompt-sync")({ sigint: true });
/*let ciudades = ["cali", "medellin", "quilla"];
let cosas = [1, true, "hola", 3.5,[2,3,4,5], {"nombre":"sdsd"}];
console.log(cosas[5]);
//agregar nuevo valor con el metodo push
cosas.push("nuevo valor");
//eliminar el ultimo  valor con el metodo pop
cosas.pop();
//elkiminar el primer valor con el metodo shift
cosas.shift();
//saber cuantos elementos tiene el array
console.log(cosas.length);
//matrices 
let matriz=[[1,0,0],[0,1,0],[0,0,1]];


//objetos
let carro = {
    placa: "ques234",
    marca: "toyota",
    modelo: 2020,
    color: "rojo",
};
console.log(carro.placa);
//agregar un nuevo valor al objeto|
carro.precio = 20000000;
//eliminar un valor del objeto
delete carro.precio;
//recorrer un objeto*/


//generar aleatoriamente un numero entre 1 y 5
/*let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
let numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos: "));
let contadoropciones = 0;
for (let i = 0; i < 5; i++) {
    if (numeroAleatorio === numeroAdivinar) {
        console.log("ganaste");
        contadoropciones += 1;
        break;
    } else if (numeroAleatorio > numeroAdivinar) {
        console.log("el numero es mayor");
        contadoropciones += 1;
        numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos"));
    } else if (numeroAleatorio < numeroAdivinar) {
        console.log("el numero es menor");
        contadoropciones += 1;
        numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos"));
    } else {
        console.log("numero no valido");
        numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos"));
    }   
    if (contadoropciones === 4) {
        console.log("perdiste");
        break;
    }
}*/


let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
let numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos: "));
let contadoropciones = 0;
while (contadoropciones < 5) {
    if (numeroAleatorio === numeroAdivinar) {
        console.log("ganaste");
        break;
    } else if (numeroAleatorio > numeroAdivinar) {
        console.log("el numero es mayor");
        contadoropciones += 1;
        console.log("te quedan " + (5 - contadoropciones) + " intentos");
        numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos"));
    } else if (numeroAleatorio < numeroAdivinar) {
        console.log("el numero es menor");
        contadoropciones += 1;
        console.log("te quedan " + (5 - contadoropciones) + " intentos");
        numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos"));
    } else if(contadoropciones === 4){
        console.log("perdiste, el numero era " + numeroAleatorio);
        break;
    }
    else {
        console.log("numero no valido");
        numeroAdivinar = Number(prompt("Adivina el numero entre 1 y 5, tienes cinco intentos"));
    }
}
