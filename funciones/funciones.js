//crear una funcion que calcule el area de un circulo

function areaCirculo(radio){
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}
let area = areaCirculo(5)
console.log("el area del circulo es " + area);

//hacer una funcion que resiba como paramtro un arreglo de numeros enteros y debe retornar un arreglo con los numeros al cuadrado
function cuadradoArreglo(arreglo){  
    let arregloCuadrado = [];
    for(let i = 0; i < arreglo.length; i++){
        arregloCuadrado.push(Math.pow(arreglo[i], 2));
    }
    return arregloCuadrado;
}
let arreglo = [1, 2, 3, 4, 5];
let arregloCuadrado = cuadradoArreglo(arreglo);
console.log("el arreglo al cuadrado es " + arregloCuadrado);

