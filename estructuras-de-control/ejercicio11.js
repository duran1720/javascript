//11. Hacer un script que lea dos números enteros y como resultado se debe calcular la suma de los 
//pares existentes entre los dos números y el promedio de los números impares existentes entre 
//  los dos números. (Incluir los números leídos)
let num1 = parseInt(prompt("Ingrese el primer número entero:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
let sumaPares = 0;
promedioImpares = 0;
for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        promedioImpares += i;
    }
}
let cantidadImpares = Math.floor((num2 - num1 + 1) / 2);
if (cantidadImpares > 0) {
    promedioImpares /= cantidadImpares;
}
console.log(`La suma de los números pares entre ${num1} y ${num2} es: ${sumaPares}`);
console.log(`El promedio de los números impares entre ${num1} y ${num2} es: ${promedioImpares}`);