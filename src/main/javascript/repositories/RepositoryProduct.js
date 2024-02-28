import { Product } from "./models/Product.js";

function CreateProduct(name, brand, madeIn, price) {
    let p = new Product(null, name, brand, madeIn, price);
    return p;
}