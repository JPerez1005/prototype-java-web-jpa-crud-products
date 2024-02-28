import { Product as ImportedProduct } from "../models/Product.js";

let d = document;

// Obtener elementos
let addForm = d.getElementById('form1'),
editForm = d.getElementById('form2');
let tbu = d.getElementById('tableBody_users');

// Obtener productos del Local Storage
const products = JSON.parse(localStorage.getItem('products')) || [];

if (window.location.href.includes("new_product.html")) {

    d.addEventListener("DOMContentLoaded", function() {
        // Obtener los parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);
        // Obtener los valores de los parámetros
        const id = urlParams.get('id');
        const name = urlParams.get('name');
        const brand = urlParams.get('brand');
        const madeIn = urlParams.get('madeIn');
        const price = urlParams.get('price');
    
        // Completar los campos del formulario con los datos del producto
        d.getElementById('idInput').value = parseInt(id) + 1;
        d.getElementById('name2').value = name;
        d.getElementById('brand2').value = brand;
        d.getElementById('madeIn2').value = madeIn;
        d.getElementById('price2').value = price;
    });

    // Función para agregar un producto
    function addProduct(event) {
        event.preventDefault();
        let name = d.getElementById('name').value;
        let brand = d.getElementById('brand').value;
        let madeIn = d.getElementById('madeIn').value;
        let price = d.getElementById('price').value;
        if (name && brand && madeIn && price) {
            // Crear un nuevo objeto Producto
            const newProduct = new ImportedProduct(name, brand, madeIn, price);
            // Agregar el nuevo producto al arreglo
            products.push(newProduct);
            // Guardar en el Local Storage
            localStorage.setItem('products', JSON.stringify(products));
            // Limpiar los campos del formulario
            d.getElementById('name').value = '';
            d.getElementById('brand').value = '';
            d.getElementById('madeIn').value = '';
            d.getElementById('price').value = '';
        }
    }

    // Función para editar un producto
    function editProduct(index) {
        const name = d.getElementById('name2').value;
        const brand = d.getElementById('brand2').value;
        const madeIn = d.getElementById('madeIn2').value;
        const price = d.getElementById('price2').value;
    
        if (name && brand && madeIn && price) {
            // Actualizar el producto en el array
            products[index].name = name;
            products[index].brand = brand;
            products[index].madeIn = madeIn;
            products[index].price = price;
            // Actualizar el Local Storage
            localStorage.setItem('products', JSON.stringify(products));
            let dir=`../../../../index.html`;
            window.location.href = `${dir}`;
        }
    }
    
    // Manejar el envío del formulario
    addForm.addEventListener('submit', addProduct);
    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const index = parseInt(d.getElementById('idInput').value) - 1; // Obtener el índice del producto a editar
        editProduct(index);
    });
}else if(window.location.href.includes("index.html")) {
    // Función para eliminar un producto
    function deleteProduct(index) {
        products.splice(index,1);
        localStorage.setItem('products', JSON.stringify(products));
        // Mostrar los productos actualizados
        showProducts();
    }

    function editProduct(index) {
        // Obtener el producto a editar
        const productToEdit = products[index];
        let dir=`src/main/javascript/views/new_product.html`;
        // Redirigir a la página de edición con los datos del producto como parámetros en la URL
        window.location.href = `${dir}?id=${index}&name=${productToEdit.name}&brand=${productToEdit.brand}&madeIn=${productToEdit.madeIn}&price=${productToEdit.price}`;
    }

    // Función para mostrar los productos en la lista
    function showProducts() {
        tbu.innerHTML = ''; // Limpiar el contenido previo de la tabla
        products.forEach((product, index) => {
            const tr = document.createElement('tr'); // Crear una nueva fila
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.brand}</td>
                <td>${product.madeIn}</td>
                <td>${product.price}</td>
                <td class='actions'>
                    <button class="button edit-button"><i class="fa-solid fa-pen-to-square" style="color: #fff;"></i></button>
                    <button class="button delete-button"><i class="fa-solid fa-trash-can" style="color: #fff;"></i></button>
                </td>
            `;
            tbu.appendChild(tr); // Agregar la fila a la tabla
        });

        // Agregar eventos de clic a los botones de editar y eliminar
        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach((button, index) => {
            button.addEventListener('click', () => editProduct(index));
        });

        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach((button, index) => {
            button.addEventListener('click', () => deleteProduct(index));
        });
    }

    // Mostrar los productos al cargar la página
    showProducts();
}