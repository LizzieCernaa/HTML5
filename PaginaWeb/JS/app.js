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
    

// VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");
    function validar(e) 
    {
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
           inputComents = document.getElementById("comentarios");

           if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0 ) 
           {
              e.preventDefault();
              alert("Datos vacios");
           }

           else
           {
            e.preventDefault();
            alert("Datos enviados");
            inputNombre = "";
            inputEmail = "";
            inputComents = "";
           }
    }



// EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar);