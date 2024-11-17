// funcionamiento de botones 
document.getElementById("btn-skills").addEventListener("click", function(){
    // Mostrar imagen
    let imagen = document.getElementById("img-sobremi")

    // Alternar la visibilidad de la imagen
    if (imagen.style.display === "block") {
        imagen.style.display = "none";
    } else {
        imagen.style.display = "block";
    }
})