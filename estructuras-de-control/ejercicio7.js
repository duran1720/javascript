//7. Hacer un script que lea un número entero y como resultado informar si el número es primo o  
//no.
let numero = prompt("ingrese un numero entero");
let primo = true;
if (numero < 2) {
    primo = false;
}
for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}   
if (primo) {
    console.log("el numero es primo");
}
else {
    console.log("el numero no es primo");
} 