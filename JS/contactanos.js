
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") {
            alert("Nombre no puede estar vacío.");
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert("Nombre solo puede tener letras y espacios.");
            return;
        }

        const apellido = document.getElementById("apellido").value.trim();
        if (apellido === "") {
            alert("Apellido no puede estar vacío.");
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(apellido)) {
            alert("Apellido solo puede tener letras y espacios.");
            return;
        }

        const email = document.getElementById("email").value.trim();
        if (email === "") {
            alert("Correo electrónico no puede estar vacío.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Correo electrónico no es válido.");
            return;
        }

        const mensaje = document.getElementById("mensaje").value.trim();
        if (mensaje === "") {
            alert("Mensaje no puede estar vacío.");
            return;
        }
        if (mensaje.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            return;
        }

        alert("Formulario enviado correctamente.");
    });

});