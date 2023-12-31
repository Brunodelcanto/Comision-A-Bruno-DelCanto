const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
        secciones += `
            <section class="d-flex gap-2">
            <img src="${publicacion.url_imagen}" class="rounded" height=200 >
            <div class="d-flex flex-column justify-content-between">
                <h5>${publicacion.titulo}</h5>
                <p>${publicacion.descripcion}</p>
                <p>${publicacion.fecha}</p>
                <p>${publicacion.autor}</p>
            </div>
            </section>
        `
    })


    // Se crea la lista
    elementoHtml.innerHTML = secciones;

}



document.addEventListener('DOMContentLoaded', async () => {

    const publicaciones = await obtenerPublicaciones()
    console.log(publicaciones)


    // Modificar el DOM para mostrar las publicaciones
    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)
})

document.getElementById("botonCrear").onclick = function () {
    window.location.href = "http://localhost:3000/admin";
};

document.getElementById("botonEditar").onclick = function () {
    window.location.href = "http://localhost:3000/editar";
};

