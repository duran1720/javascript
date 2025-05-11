//8. Hacer un script que imprima las tablas de multiplicar del 5, 6 7 8 y 9.
let num = 5;
for (let i = 5; i <= 9; i++) {
    console.log("Tabla del " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}