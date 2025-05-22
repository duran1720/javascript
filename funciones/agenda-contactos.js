const prompt = require('prompt-sync')();
let contactos = [];

function agregarContacto(){
    console.clear();
    //pedir los datos del contacto
    let identifica = prompt("Ingrese la identificacion: ");
    let nombre = prompt("Ingrese el nombre: ");
    let telefono = prompt("Ingrese el telefono: ");
    let correo = prompt("Ingrese el correo: ");
    //crear el objeto contacto
    let contacto = {
        "identificacion": identifica,
        "nombre": nombre,
        "telefono": telefono,
        "correo": correo
    }
    //agregar el contacto al arreglo
    contactos.push(contacto);
    console.log("Contacto agregado");
}

//funcion comsultar por identificacion

function consultarporidentificacion(){
    console.clear();
    let identifica = prompt("Ingrese la identificacion que quiere consultar: ");
    existecontacto = false;
    contactos.forEach(contacto => {
        if(contacto.identificacion === identifica){
            existecontacto = true;
            console.log(`identificacion: ${contacto.identificacion}`);
            console.log(`nombre: ${contacto.nombre}`);
            console.log(`telefono: ${contacto.telefono}`);
            console.log(`correo: ${contacto.correo}`);
            existecontacto = true;
            
        }
    })
    if(!existecontacto){
        console.log("No existe el contacto con esta identificacion");
    }
}

//funcion listar contactos
function listarcontactos(){
    console.clear();
    contactos.forEach(contacto => {
        console.log(`identificacion: ${contacto.identificacion}`);
        console.log(`nombre: ${contacto.nombre}`);
        console.log(`telefono: ${contacto.telefono}`);
        console.log(`correo: ${contacto.correo}`);
        console.log("------------------------------");
    });    
}


//crear menu con do while
function menu(){
    let opcion = 0;
    do{
        console.log("Menu de contactos");
        console.log("1. Agregar contacto");
        console.log("2. consultar contactos");
        console.log("3. listar contacto");
        console.log("4. eliminar contacto");
        console.log("5. Salir");
        opcion = parseInt(prompt("Seleccione una opcion: "));
        switch(opcion){
            case 1:
                agregarContacto();
            
                break;
            case 2:
                
                consultarporidentificacion();
                break;
            case 3:
                listarcontactos();
          
                break;
            case 4:
                console.log("eliminar")
             
                break;
            case 5:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opcion no valida");
                break
        }
        prompt("Presione enter para continuar...");
    }while(opcion !== 5);
}
menu();