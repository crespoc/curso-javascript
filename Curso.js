document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Evitar el envío por defecto
    event.preventDefault();
    
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var errorDiv = document.getElementById('error');
    
    // Limpiar mensajes de error previos
    errorDiv.innerHTML = '';

    // Validaciones simples
    if (nombre === '' || apellido === '' || telefono === '' || email === '') {
        errorDiv.innerHTML = 'Todos los campos son obligatorios.';
        return;
    }

    // Validación de email con expresión regular simple
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorDiv.innerHTML = 'El formato del email no es válido.';
        return;
    }

    // Si todas las validaciones pasan
    alert('Formulario enviado exitosamente!');
    // Aquí puedes agregar lógica para enviar el formulario, como usar AJAX o enviarlo normalmente
});
