//9. Hacer un script que lea un número entero entre 1 y 20 y también debe leer una frase. Al final el 
//script debe imprimir la frase tantas veces el número leído
let num = 10;
let frase = prompt("Ingrese una frase:");
if (num >= 1 && num <= 20) {
    for (let i = 0; i < num; i++) {
        console.log(frase);
    }
}