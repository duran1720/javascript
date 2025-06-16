const divPrincipal = document.getElementById("principal");
console.log(divPrincipal);
const textoPie = document.getElementById("textoPiePagina");
console.log(textoPie);

const contenido= document.getElementsByClassName("contenido");
console.log(contenido);

const nombre = document.getElementsByName("txtnombre");

const li = document.getElementsByTagName("li");
console.log(li);

//querySelector
const div = document.querySelector("div");
console.log(div);

//queryselector por id
const elementoid = document.querySelector("#textoPiePagina");
console.log(elementoid);

//querySelector por clase
const elementoclase = document.querySelector(".contenido");
console.log(elementoclase);

//queryselectorall por atributo
const elementoatributo = document.querySelectorAll("[type='text']");
console.log(elementoatributo);

//obtener el contenido 

console.log(elementoid.textContent)

//modificar valor 
elementoid.textContent="cauca adso 2025 sena ctpi"

//inner text 
console.log(elementoid.innerHTML="<p><B>ADSO</B>")