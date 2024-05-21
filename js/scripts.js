
const datos = {
    nombre:'',
    email:'',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector(".formulario");

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de Submit
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    /** Validar el Formulario**/
   const { nombre, email, mensaje} = datos;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if(nombre === '' || email === ''  || mensaje ===''){
        mostrarAlerta('Todos los campos son obligatorios', true);

       console.log(nombre,email,mensaje);
        return;
    }

    //Crear la alerta de Enviar Correctamente
    mostrarAlerta('Formulario Procesado Correctamente');

    setTimeout(function() {
        window.location.href = window.location.href;
    }, 3000);
});

function leerTexto(e) {
    //console.log(e.target.value)

    datos[e.target.id]= e.target.value;

    console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

