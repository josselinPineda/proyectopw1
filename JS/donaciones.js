document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Validación del nombre
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") {
            alert("El nombre no puede estar vacío.");
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert("El nombre solo puede contener letras y espacios.");
            return;
        }

        // Validación del correo electrónico
        const email = document.getElementById("email").value.trim();
        if (email === "") {
            alert("El correo electrónico no puede estar vacío.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("El correo electrónico no es válido.");
            return;
        }

        // Validación del CVV
        const cvv = document.getElementById("cvv").value.trim();
        if (!/^\d{3}$/.test(cvv)) {
            alert("El CVV debe ser de exactamente 3 dígitos.");
            return;
        }

        // Validación del monto
        const monto = document.getElementById("monto").value.trim();
        if (!/^(0|[1-9]\d*)$/.test(monto)) {
            alert("El monto debe ser un número válido y no puede ser negativo.");
            return;
        }

        alert("Se realizó la donación de manera exitosa.");
    });
});