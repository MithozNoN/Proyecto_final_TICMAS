var boton = document.querySelector('.subir'); // creamos la variable boton, por medio de query y la clase del elemento le indicamos que debe tomar.

// Creamos la función que va a determinar la aultura a la que va a aparecer el boton para subir
window.onscroll = function () {
	if (document.documentElement.scrollTop > 100) { 
		document.querySelector('.subir').style.display = 'block'; // Si se baja a más de 100 px aparecera el boton
	} else {
		document.querySelector('.subir').style.display = 'none' // Sino se ocultará
	}
// Creamos la función para el evento
	boton.addEventListener('click', function () {
		window.scrollTo({ // Al hacer click en el boton debe realizar el evento
			top: 0,		  // Subirá hasta la posición 0
			behavior: 'smooth'  // Se desplazara de una manera suave
		})
	})
}

// Función de Capturar, Almacenar datos y Limpiar campos
$(document).ready(function(){    
    $('#enviar').click(function(){
        var nom = document.getElementById("nombretxt").value; // Captura de datos escrito en los inputs
        localStorage.setItem("Nombre", nom); // Guardando los datos en el LocalStorage
        document.getElementById("nombretxt").value = ""; // Limpiando los campos o inputs
    });   
});

