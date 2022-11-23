import "./style.css";
import Product from "../modules/product.js";

const products = [];

const storeContent = document.querySelector(".app_content");
const ProductList = document.querySelector(".app_content");

const likeProduct = async (id) => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes/`,
    {
      method: "POST",
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then(() => {
    const likeItem = ProductList.querySelector(`div[id="${id}"]`);
    const li = likeItem.querySelector("span");
    li.innerHTML = `${products[id].likes + 1} likes`;
    products[id].likes += 1;
  });
};

const displayProducts = () => {
  products.forEach((element) => {
    storeContent.innerHTML += `
         <div id="${element.id}" class="card">
          <div class="card-inner">
            <div class="img_container">
              <img src=${element.image} alt="" />
            </div>
            <div id="infos">
                <div class="title">${element.name}</div>
                <div class="likes">
                <i class="fa-regular fa-heart" ></i>
                <span>${element.likes} likes </span>
                </div>
            </div>
            
            <button id="comment">Comments</button>
            <button id="refreshs">Reservations</button>
          </div>
        </div>
 `;
  });
};

const store = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((res) => res.json());

  const Likes = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes/`
  ).then((res) => res.json());
  response.forEach((element) => {
    const id = response.indexOf(element);
    const likes = Likes.find((l) => l.item_id == `${id}`)?.likes || 0;

    const prod = new Product(
      id,
      element.title.substring(0, 16),
      element.image,
      likes
    );
    products.push(prod);
  });

  displayProducts();
};

const getAppApi = async () => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  console.log(res.json());
};

getAppApi();

document.addEventListener("DOMContentLoaded", store());

ProductList.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("fa-heart")) {
    const id =
      element.parentElement.parentElement.parentElement.parentElement.getAttribute(
        "id"
      );
    likeProduct(id);
  } else if (element.getAttribute("id") === "comment") {
    const id = element.parentElement.parentElement.getAttribute("id");
    console.log(id);
  }
});
