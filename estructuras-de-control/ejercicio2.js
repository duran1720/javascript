//2. Una persona puede votar en las elecciones si cumple con las siguientes condiciones: 
//a. Tener mínimo 18 años de edad 
//b. Tener cédula 
//c. Tener inscrita la cédula
//Hacer un script que informe a una persona si puede votar o no puede votar. Recuerde que 
//para poder votar debe cumplir con las 3 condiciones anteriores.
let edad = prompt("ingrese su edad");
let cedula = prompt("tiene cedula? (si/no)");   
let inscrita = prompt("tiene cedula inscrita? (si/no)");
if(edad>=18 && cedula==="si" && inscrita==="si"){
    console.log("puede votar"); 
}else if(edad<18){
    console.log("no puede votar por ser menor de edad");
}else if(cedula==="no"){
    console.log("no puede votar por no tener cedula");
}else if(inscrita==="no"){
    console.log("no puede votar por no tener cedula inscrita");
}else{
    console.log("no puede votar");
}