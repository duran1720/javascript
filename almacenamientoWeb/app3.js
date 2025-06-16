function obtenerPosts(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let opciones = {
        method: 'GET'
    };
    fetch(url, opciones)
    .then(resultado=>resultado.json())
    .then (datos=>{
        console.log(datos);
      
    })
    .catch(error => {
        console.error('Error al obtener los posts:', error);
    });
}