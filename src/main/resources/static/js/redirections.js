function redirect(element, event) {
    event.preventDefault(); // Prevenir la acción predeterminada del enlace
    
    // Verificar si el enlace existe
    fetch(element.href, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // Si el enlace existe, redirigir al usuario
                window.location.href = element.href;
            } else {
                // Si el enlace no existe, redirigir al usuario a otro enlace
                window.location.href = "../../templates/views/new_product.html"; // Cambia "/alternate" por el enlace de destino deseado
                console.log("Se encontró la pagina");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}