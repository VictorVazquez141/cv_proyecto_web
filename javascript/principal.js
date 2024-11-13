// funcionamiento de botones 
document.getElementById("btn-sobremi").addEventListener("click", function(){
    // Mostrar imagen
    let imagen = document.getElementById("sobremi")

    // Alternar la visibilidad de la imagen
    if (imagen.style.display === "none") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
})