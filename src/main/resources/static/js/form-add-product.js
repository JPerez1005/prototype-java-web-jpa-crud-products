const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const idInput = document.getElementById("idInput");

document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el campo de entrada del ID ya está lleno al cargar la página
    console.log("Valor del campo de entrada del ID al cargar la página:", idInput.value);
    if (idInput.value.trim() !== "") {
        // Si el campo está lleno, vaciar el primer formulario después de un breve retraso
        setTimeout(function() {
            firstForm.reset();
            console.log("Formulario restablecido:", firstForm);
            // Eliminar los valores de los campos de entrada dinámicamente establecidos por Thymeleaf
            document.querySelectorAll('#form1 input[type="text"], #form1 input[type="number"]').forEach(function(input) {
                input.value = '';
            });
        }, 100); // 100 milisegundos de retraso
    }
});

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    // Vaciar el segundo formulario al cambiar al formulario de registro
    //secondForm.reset();
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    // Vaciar el primer formulario al cambiar al formulario de edición
    //firstForm.reset();
});

firstForm.addEventListener("submit", (e) => {
    // Si el primer formulario está lleno, vaciar el segundo formulario
    if (firstForm.checkValidity()) {
        secondForm.reset();
    } else {
        e.preventDefault(); // Evitar envío si el formulario no es válido
    }
});

secondForm.addEventListener("submit", (e) => {
    // Si el segundo formulario está lleno, vaciar el primer formulario
    if (secondForm.checkValidity()) {
        firstForm.reset();
    } else {
        e.preventDefault(); // Evitar envío si el formulario no es válido
    }
});



