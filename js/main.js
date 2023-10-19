// capturar datos de los inputs

let position = 1
const lista = []
btnAgregar.addEventListener("click", (e) => {
    
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let veiculo = document.getElementById("veiculo").value; 
    let cliente = {nombre:nombre,veiculo:veiculo,pos:position}
    console.log(cliente)
    lista.push(cliente)
    position += 1
    let conten = `<div class="col-md-3 mb-3">
    <div class="card border border-0 text-center">
    <p class="card-text"><b>Hola ${cliente.nombre}</b></p>
    <p class="card-text">puede ingresar su ${cliente.veiculo} por el puesto ${cliente.pos}</p>
    </div>
    </div>
    </div>`;
    let not = `<p class="text-center"> no hay mas puestos disponibles<p/>`


    
    if(position < 12){
        document.getElementById("results").innerHTML = conten;
    }else{document.getElementById("results").innerHTML = not}

    console.log(lista,position)
   


    guardarClientesLS(lista)
    return lista
});
console.log(lista)


btnRemove.addEventListener("click",(e)=>{
    e.preventDefault()
    lista.pop()
    guardarClientesLS(lista)
})


//creando la localstore
const guardarClientesLS = (lista) =>{
    localStorage.setItem("store",JSON.stringify(lista))

}
guardarClientesLS(lista)




// consumiendo nuestro json
const consumirJSON = (e) => {
    e.preventDefault()
    fetch("json/data.json")
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenidoHTML = "";

        data.forEach(client => {
            contenidoHTML += `<div class="col-md-3 mb-3">
            <div class="card border border-0 text-center">
            <p class="card-text"><b>${client.nombre}</b></p>
            <p class="card-text">${client.veiculo}</p>
            <p class="card-text">${client.pos}</p>
            </div>
            </div>
            </div>`;
        });

        document.getElementById("results").innerHTML = contenidoHTML;
    })
    .catch(error => {
        document.getElementById("results").innerHTML = `<div class="alert alert-danger text-center" role="alert"><p>Error! No se pudo acceder al Servicio!<br>
        ${error}</p></div>`;
    })
}

btnMostrar.addEventListener("click",consumirJSON
)


