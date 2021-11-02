const formulario= document .getElementById ('formulario');
const inputs= document.querryselectorAll('#formulario input')

const expresiones= {  
nombre: /^[a-z-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
consulta: /^[a-zA-ZÀ-ÿ\s]{140,400}$/, // Letras y espacios, pueden llevar acentos.
email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
telefono: /^\d{10}$/, // 10 numeros.
}

const validarFormulario = () => {
    switch(e.target.name) {
        case: "nombre";
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i') .classList.remove('fa-solid fa-xmark');
                document.querySelector('#grupo__nombre i') .classList.add('fa-times-circle');
            } else {
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i') .classList.remove('fa-times-circle');
                document.querySelector('#grupo__nombre i') .classList.add('fa-solid fa-xmark');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo')
            }
        break: 
        case: "email";
        break: 
        case: "consulta";
        break: 
        case: "telefono";
        break: 
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarformulario);
});

formulario.addEventListener('submit', (e) => {
e.preventDefault(); 
});

