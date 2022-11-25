import './style.css';
import Product from './modules/product.js';
import countProduct from './modules/productCounter.js';
import { displayProducts, likeProduct } from './modules/store.js';

const products = [];

const ProductList = document.querySelector('.app_content');

const store = async () => {
  const response = await fetch(
    'https://fakestoreapi.com/products/category/electronics',
  ).then((res) => res.json());

  const Likes = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes/`,
  ).then((res) => res.json());

  response.forEach((element) => {
    const id = response.indexOf(element);
    const likes = Likes.find((l) => l.item_id === id.toString())?.likes || 0;

    const prod = new Product(
      id,
      element.title.substring(0, 16),
      element.image,
      likes,
    );
    products.push(prod);
  });

  displayProducts(products);
  countProduct();
};

document.addEventListener('DOMContentLoaded', store());

ProductList.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('fa-heart')) {
    const id = element.parentElement.parentElement.parentElement.parentElement.getAttribute(
      'id',
    );
    likeProduct(products, id);
  }
});
