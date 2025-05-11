//3. Hacer un script que lea un número entero entre 1 y 7 correspondiente a cada día de la semana 
//donde 1 corresponde a Lunes y 7 a Domingo. El script debe imprimir el día de acuerdo al número 
//leído. Si el número no está entre 1 y 7 se debe mostrar un mensaje que diga “Número fuera de 
//rango” 
let dia = prompt("ingrese un numero entre 1 y 7");
switch(dia){
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo");
        break;
    default:
        console.log("numero fuera de rango");
}