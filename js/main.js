// ------------------- cambio modo dark ------------------- //  
const iconoLight = document.querySelector("#icon-light");
const bodyCambio = document.querySelector("body")
// console.log(iconoLight)

// 
const darkMode = () => {
    bodyCambio.classList.toggle("dark")
    iconoLight.classList.toggle("more")
}

// click en el icono y agrego la clase dark
iconoLight.addEventListener("click", () => {
    localDarkMode = localStorage.getItem("dark");

    if(localDarkMode !== "on") {
        darkMode();
        localDarkMode = localStorage.setItem("dark", "on");
    } else {
        darkMode();
        localDarkMode = localStorage.setItem("dark", null);
    }
});

// creo la variable para buscar la clave dark
let localDarkMode = localStorage.getItem("dark");
// si lo guardado en el localStorage es igual a activado dejalo y no lo borra
if(localDarkMode === "on") {
    darkMode();
}


// ------------------- barra lateral de nav ------------------- // 
let iconoNav = document.querySelector("#icono-nav");
let navBarra = document.querySelector(".nav-barra");
let cerrarNav = document.querySelector("#cerrar-nav");

// abrir carrito
iconoNav.onclick = () =>{
    navBarra.classList.add("active");
}
// cerrar carrito
cerrarNav.onclick = () =>{
    navBarra.classList.remove("active");
}


// ------------------- peliculas JSON y fetch ------------------- // 
const contenedorPeliculas = document.querySelector("#contenedor-peliculas");

contenedorPeliculas.innerHTML = "";

fetch("./peliculas.json") 
    .then (response => response.json())
    .then (peliculas => {
        peliculas.forEach(pelicula => {
            const div = document.createElement("div")
            div.classList.add("pelicula-caja");
            div.innerHTML = `
            <img src="${pelicula.portada}" alt="${pelicula.titulo}" class="pelicula-imag">
            <div class="pelicula-detalles">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3 class="pelicula-titulo">${pelicula.titulo}</h3>
                <p class="pelicula-año">${pelicula.estreno}</p>
                <p class="pelicula-genero">${pelicula.genero}</p>
                <a href="${pelicula.link}"><button class="pelicula-ver">VER</button></a>
            </div>
            `

            contenedorPeliculas.append(div);
        });
    })



    // <div class="pelicula-caja">
    // <img src="./pelis/peli-01.jpg" alt="peli-01" class="pelicula-imag">
    // <div class="pelicula-detalles">
    //     <div class="stars">
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //     </div>
    //     <h3 class="pelicula-titulo">Tesis sobre un homicidio</h3>
    //     <p class="pelicula-año">2013</p>
    //     <p class="pelicula-genero">Intriga. Thriller. Crimen. Thriller psicológico</p>
    //     <a href="https://www.youtube.com/watch?v=ebqdXwb_51M&ab_channel=Bjgtjme-Pel%C3%ADculasGratis"><button class="pelicula-ver">ver</button></a>
    // </div>
    // </div>  





