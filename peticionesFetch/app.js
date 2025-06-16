let pilotos=[]
const filaPilotos = document.querySelector(".row");
function obtenerPilotos(){
    let url = "https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/pilotos_formula1.json";

    let opciones = {
        method: "GET"
    }
    fetch(url,opciones)
    .then(respuesta =>respuesta.json())
    .then(datos=>{
       
        pilotos=datos
        mostrarPilotos()
    })
}


function mostrarPilotos(){
 
    pilotos.forEach(piloto => {
        const cardPiloto = document.createElement("div");
        cardPiloto.classList.add("col-sm-4");
        cardPiloto.className="card-header"
        divHeader.className="header";
        divHeader.textContent=piloto.nombre;
        cardPiloto.appendChild(divHeader);
        const divBody = document.createElement("div");
        divBody.className="card-body";
        divBody.innerHTML =  "<b>Carreras Ganadas : </b>"+piloto.resultados.carreras_ganadas+
                             "<br>"+"<br><b>Podios:</b>"+piloto.resultados.podios + 
                             "<br>"+"<br><b>Poles:</b>"+piloto.resultado.poles
        cardPiloto.appendChild(divBody);
        const divFooter = document.createElement("div");
        divFooter.textContent =piloto.equipo;
        cardPiloto.appendChild(divFooter);
        filaPilotos.appendChild(cardPiloto);
    });
}
obtenerPilotos()