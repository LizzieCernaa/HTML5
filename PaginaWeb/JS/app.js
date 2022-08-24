//MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar");
    enlaces = document.getElementById("enlaces");

    //CLICK ABRIR
    btnMenuOpen.addEventListener("click", function() {
        menuResponsive.classList.add("active");
    })

     //CLICK CERRAR
    btnMenuClose.addEventListener("click", function() {
      menuResponsive.classList.remove("active");
    })

    //CERRAR MENU CON ELEMENTOS DE ENLACES
    enlaces.addEventListener("click", function() {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    })


// SLIDER DE PRODUCTOS 
var contenedor = document.querySelector('.slider'),
    btnIzquierda = document.getElementById('btn-izquierda'),
    btnDerecha = document.getElementById('btn-derecha');

    // EVENTO PARA EL BOTON DERECHO
    btnDerecha.addEventListener('click', function ()
    {
     contenedor.scrollLeft += contenedor.offsetWidth;
    });

    // EVENTO PARA EL BOTON IZQUIERDA
    btnIzquierda.addEventListener('click', function ()
    {
     contenedor.scrollLeft -= contenedor.offsetWidth;
    });
    