//6. Hacer un script  que imprima los números múltiplos de 3 que hay entre dos números. 
let num1 = prompt("ingrese el primer numero");
let num2 = prompt("ingrese el segundo numero");

if(num1<num2){
    for(let i=num1; i<=num2; i++){
        if(i%3===0){
            console.log(i);
        }
    }
}
else if(num1>num2){
    for(let i=num2; i<=num1; i++){
        if(i%3===0){
            console.log(i);
        }
    }
}
else{
    console.log("los numeros son iguales");
}
