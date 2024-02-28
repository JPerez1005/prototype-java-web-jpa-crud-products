let d = document;

// Obtener elementos
let addForm = d.getElementById('form1');
let tbu = d.getElementById('tableBody_users');

// Obtener productos del Local Storage
const products = JSON.parse(localStorage.getItem('products')) || [];

// Clase Producto
class Product {
    constructor(name, brand, madeIn, price) {
        this.name = name;
        this.brand = brand;
        this.madeIn = madeIn;
        this.price = price;
    }
}

// Función para agregar un producto
function addProduct(event) {
    event.preventDefault();
    let name = d.getElementById('name').value;
    let brand = d.getElementById('brand').value;
    let madeIn = d.getElementById('madeIn').value;
    let price = d.getElementById('price').value;
    if (name && brand && madeIn && price) {
        // Crear un nuevo objeto Producto
        const newProduct = new Product(name, brand, madeIn, price);
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

// Función para eliminar una tarea
function deleteProduct(index) {
    products.splice(index,1);
    localStorage.setItem('products', JSON.stringify(products));
    showProducts();
}

// Función para editar una tarea
function editProduct(index) {
    window.location.href='../views/new_product.html';
    const updatedProduct = prompt('Editar tarea:', products[index]);
    if (updatedProduct !== null) {
        products[index] = updatedProduct;
        localStorage.setItem('products', JSON.stringify(products));
        showProducts();
    }
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
                <button class="button" onclick="deleteProduct(${index})"><i class="fa-solid fa-pen-to-square" style="color: #fff;"></i></button>
                <button class="button" onclick="deleteProduct(${index})"><i class="fa-solid fa-trash-can" style="color: #fff;"></i></button>
            </td>
        `;
        tbu.appendChild(tr); // Agregar la fila a la tabla
    });
}

// Manejar el envío del formulario
//addForm.addEventListener('submit', addProduct);
showProducts();
