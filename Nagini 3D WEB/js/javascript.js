function MySubmit() {
    var fname = document.getElementById("fname").value;
    var at = document.getElementById("email").value.indexOf("@");;
    var mensaje = document.getElementById("mensaje").value;
    submitOK = "true";
    
    if (fname.length > 8) {
      alert("Nombre muy largo!");
      submitOK = "false";
    }
    
    if (mensaje.length > 250 || mensaje.length < 1) {
      alert("El mensaje debe tener entre 1 y 250 carácteres");
      submitOK = "false";
    }
    if (at == -1) {
      alert("Correo electrónico inválido!");
      submitOK = "false";
    }
    
    if (submitOK == "false") {
      return false;
      
    }
}