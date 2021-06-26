function validarForm() {
    if(document.getElementById('nombre').value.trim()==''){
        alert('Debe completar los campos obligatorios')
    } else {
        if(document.getElementById('nombre').value.length<3){
        alert('El nombre debe tener al menos 3 caracteres')
    }   if(document.getElementById('email').value.trim()==''){
        alert('Debe ingresar su email')
    }   if(document.getElementById('dni').value.trim()==''){
        alert('Debe ingresar su DNI')
    }       else {
            if(document.getElementById('dni').value.length<7){
            alert('No es un numero correcto de dni')
    } if(document.getElementById('codigo').value.trim()==''){
        alert('Debe ingresar la contraseña')
    }
}
}
}