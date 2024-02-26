$(document).ready(function() {
    // Función para manejar la activación y desactivación del contenedor de búsqueda
    function searchToggle(obj, evt) {
        var container = $(obj).closest('.search-wrapper');
        if (!container.hasClass('active')) {
            container.addClass('active');
            evt.preventDefault();
        } else {
            // Si el clic fue en el botón de cierre, desactivar el contenedor y evitar la recarga de la página
            if ($(obj).hasClass('close')) {
                container.removeClass('active');
                evt.preventDefault();
            } else {
                // Si el clic fue fuera del input de búsqueda, enviar el formulario
                if ($(obj).closest('.input-holder').length === 0) {
                    evt.preventDefault();
                    console.log("datos encontrados");
                }
            }
        }
    }

    // Escucha el evento de entrada en el campo de búsqueda
    $('.search-input').on('input', function() {
        var searchText = $(this).val().toLowerCase();
        $('#datatable_users tbody tr').each(function() {
            var rowData = $(this).text().toLowerCase();
            if (rowData.indexOf(searchText) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

    // Asigna el evento click al botón de búsqueda para activar/desactivar el contenedor de búsqueda
    $('.search-icon, .close').click(function(event) {
        searchToggle(this, event);
    });
});

console.clear();
console.log("Recordar que la consola fue limpiada, Aquí no nada pasó :)");