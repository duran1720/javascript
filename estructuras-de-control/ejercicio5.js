//5. La nueva reforma tributaria en Colombia propone recaudar un impuesto a los salarios de todos 
//los colombianos de acuerdo a la siguiente tabla:  
 
//Escribir  un  script  que  pregunte  a  una  persona  su  salario  mensual  y  muestre  por  pantalla  el 
//impuesto que debe pagar. El porcentaje se calcula del salario mensual.
let salario = prompt("ingrese su salario mensual");
if (salario<1000000){
    impuesto=0.01;
    porcentaje=0.01*salario;
    console.log("el impuesto a pagar es: " + porcentaje);
}else if (salario>=1000000 && salario<=2000000){
    impuesto=0.03;
    porcentaje=0.03*salario;
    console.log("el impuesto a pagar es: " + porcentaje);   
}else if (salario>2000000 && salario<=4000000){
    impuesto=0.05;
    porcentaje=0.05*salario;
    console.log("el impuesto a pagar es: " + porcentaje);
}else if (salario>4000000 && salario<=10000000){
    impuesto=0.07;
    porcentaje=0.07*salario;
    console.log("el impuesto a pagar es: " + porcentaje);
}else if (salario>10000000){
    impuesto=0.1;
    porcentaje=0.1*salario;
    console.log("el impuesto a pagar es: " + porcentaje);
}else{
    console.log("salario no valido");
}