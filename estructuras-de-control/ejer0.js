//condicioal if

if(5>7){
    console.log("verdadero");
}else{
    console.log("falso");
}
let dato = "cine";
let estadoTiempo = "lluviendo";
let verano=3;
if(estadoTiempo === verano){
    console.log("voy a " + dato);
}else{
    console.log("me quedo en casa");
}
x= 10;
if(x>5){
    console.log("es mayor") ;
} 
let suma = 5+7;  
console.log(suma);

//condicional if anidado

let valor= 5;
if(valor===1){
    console.log("uno");
}
else if(valor===2){
    console.log("dos");
}else if(valor===3){    
    console.log("tres");        
}else if(valor===4){    
    console.log("cuatro");  
}else {
    console.log("otro valor ");
}

//switch
let mes = 5;
switch(mes){
    case 1:
        console.log(31);
        break;
    case 2:
        console.log(28);
        break;
    case 3:
        console.log(31);
        break;
    case 4:
        console.log(30);
        break;
    case 5:
        console.log(31);
        break;
    default:
        console.log("no se puede identificar");
}
//operador ternario
let nota = 7;
console.log(nota<=5 ? "aprobado" : "reprobado");//?=operador ternario :=si no
