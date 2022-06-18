const url = "https://mock-data-api.firebaseio.com/webb21/products.json";

const productList = document.getElementById("productList");
const total = document.getElementById("total");
const shoppingCart = document.getElementById("shoppingCart");
const shoppingCartTitle = document.getElementById("shoppingCartTitle");
const buttonFilter = document.getElementById("buttonFilter");
const inputFilter = document.getElementById("inputFilter");

let totalArray = [];
let productData;

function renderProduct(product) {
  const div = document.createElement("div");
  div.id = product.id;

  nameElement = document.createElement("h1");
  imgElement = document.createElement("img");
  descElement = document.createElement("p");
  priceElement = document.createElement("p");
  ratingElement = document.createElement("p");
  stockElement = document.createElement("p");
  buttonElement = document.createElement("button");

  nameElement.innerText = product.name;
  imgElement.src = product.images[0].src.small;
  imgElement.alt = product.images[0].alt;
  descElement.innerText = product.description;
  priceElement.innerText = `Price: ${product.price} kr`;
  ratingElement.innerText = `Rating: ${product.rating} / 5 ⭐`;
  stockElement.innerText = `Stock: ${product.stock}`;
  buttonElement.innerText = "Buy";

  div.appendChild(nameElement);
  div.appendChild(imgElement);
  div.appendChild(descElement);
  div.appendChild(priceElement);
  div.appendChild(ratingElement);
  div.appendChild(stockElement);
  div.appendChild(buttonElement);

  productList.appendChild(div);

  imgElement.addEventListener("click", function () {
    renderShoppingCartList(product);
  });

  buttonElement.addEventListener("click", function () {
    renderShoppingCartList(product);
  });

  function renderShoppingCartList(product) {
    shoppingCartTitle.innerText = "Shopping Cart";
    const productElement = document.createElement("p");
    productElement.innerText = `${product.name} - ${product.price} kr`;
    shoppingCart.appendChild(productElement);
    totalArray.push(product.price);
    total.innerText = `Total: ${sumOfArray()} kr`;
  }

  buttonFilter.addEventListener("click", function () {
    filterProductList(productData);
  });
}

function filterProductList(productList) {
  productList.forEach((product) => {
    if (inputFilter.value > product.rating || product.rating == undefined) {
      document.getElementById(product.id).innerText = "";
    }
  });
}

function sumOfArray() {
  let sum = 0;
  totalArray.forEach((item) => {
    sum += item;
  });
  return sum;
}

function renderProductList(data) {
  data.forEach((product) => {
    renderProduct(product);
  });
}

fetch(url)
  .then((res) => res.json())
  .then(
    (data) => (console.log(data), renderProductList(data), (productData = data))
  );
