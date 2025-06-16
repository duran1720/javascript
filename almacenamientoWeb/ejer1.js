let pilotos=[]
const filaPilotos = document.querySelector(".row")

function obtenerPilotos(){
    let url = "https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/pilotos_formula1.json"
    let opciones = {
        "method": "GET"
    }
    fetch(url,opciones)
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        //console.log(datos)
        pilotos=datos
        //console.log(pilotos)
        mostrarPilotos()
    })
}

function mostrarPilotos(){
    pilotos.forEach(piloto => {
        const cardPiloto  =document.createElement("div")
        cardPiloto.className="card"
        cardPiloto.classList.add("col-sm-3")
        const divHeader = document.createElement("div")
        divHeader.className="card-header"
        divHeader.textContent=piloto.nombre
        cardPiloto.appendChild(divHeader)
        const divBody = document.createElement("div")
        divBody.className="card-body"
        divBody.innerHTML="<b>Carreras Ganadas: </b>" + piloto.resultados.carreras_ganadas + 
                          "<br><b>Podios: </b>" + piloto.resultados.podios +
                          "<br><b>Poles: </b>" + piloto.resultados.poles
        cardPiloto.appendChild(divBody)
        const divFooter = document.createElement("div")
        divFooter.className="card-footer"
        divFooter.textContent=piloto.equipo
        cardPiloto.appendChild(divFooter)

        filaPilotos.appendChild(cardPiloto)

    });
}

obtenerPilotos()