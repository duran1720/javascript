//ciclo while
let i = 0;// inicializa la variable i en 0
while(i<5){//mientras i sea menor que 5
    console.log(i);//imprime el valor de i
    i++;//incrementa i en 1
}
//ciclo for ejemplo numeros del 1 al 100
for(let i=1; i<=100; i++){//inicializa la variable i en 1 y la incrementa hasta 100
    console.log(i);//imprime el valor de i
}
//mismo ejercicio pero con while
let z=1;// inicializa la variable i en 1
while(z<=100){//mientras i sea menor o igual a 100
    console.log(i);//imprime el valor de i
    i++;//incrementa i en 1
}
//mismo ejercicio pero con do while
let j=1;// inicializa la variable i en 1
do{
    console.log(j);//imprime el valor de i
    j++;//incrementa i en 1
}while(j<=100);//mientras i sea menor o igual a 100 

//numero par 
for (let i=1; i<=10; i++){
    if (i%2===0){
        continue;//si i es par, salta a la siguiente iteracion
    }
    console.log(i + " es par");
}  
let x=4
while(x<=10){
    console.log(x);
    x++;//incrementa x en 1
    if(x===7){
        break;//si x es igual a 7, sale del ciclo
    }   
}
for (let i=1; i<=5; i++){
    if(i===1){
        console.log("*")
    }else if(i===2){
        console.log("**")
    }else if(i===3){
        console.log("***")
    }else if(i===4){
        console.log("****")
    }else if(i===5){
        console.log("*****")

    }    

   
}