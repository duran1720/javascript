//4. Escribir un script para una empresa que tiene salas de juegos para todas las edades y quiere 
//calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa 
//debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el  cliente es 
//menor de 5 años puede entrar gratis, si tiene entre 5 y 18 años debe pagar 5 mil pesos y si es 
//mayor de 18 años debe pagar 10 mil pesos. 
let edad = prompt("ingrese su edad");
let precio= 10000;
if(edad<5){
    console.log("la entrada es gratis");
}
else if(edad>=5 && edad<=18){
    console.log("el precio de la entrada es 5000"); 
}
else if(edad>18){
    console.log("el precio de la entrada es 10000");
}
else{
    console.log("edad no valida");
}
