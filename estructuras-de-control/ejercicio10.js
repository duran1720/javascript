//10. Hacer  un  script  que  pida  un  número  y  calcule  su  factorial  (El  factorial  de  un  número  es  el 
//producto de todos los enteros entre 1 y el propio número y se representa por el número seguido 
//de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120) 
let numero = 5;
if (numero < 0) {
    console.log("El factorial no existe para numeros negativos");
}
for (let i = numero - 1; i >= 1; i--) {
    numero *= i;
}
console.log(`El factorial es: ${numero}`);