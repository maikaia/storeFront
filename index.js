const url = "https://mock-data-api.firebaseio.com/webb21/products.json";
const productList = document.getElementById("productList");

function renderProduct(product) {
  const div = document.createElement("div");
  div.id = product.id

  const nameElement = document.createElement("h1");
  imgElement = document.createElement("img");
  descElement = document.createElement("p");
  priceElement = document.createElement("p");
  ratingElement = document.createElement("p");
  stockElement = document.createElement("p");

  nameElement.innerText = product.name;
  imgElement.src = product.images[0].src.small;
  imgElement.alt = product.images[0].alt
  descElement.innerText = product.description;
  priceElement.innerText = `Price: ${product.price} kr`;
  ratingElement.innerText = `Rating: ${product.rating} / 5 ⭐`;
  stockElement.innerText = `Stock: ${product.stock}`;

  div.appendChild(nameElement);
  div.appendChild(imgElement);
  div.appendChild(descElement);
  div.appendChild(priceElement);
  div.appendChild(ratingElement);
  div.appendChild(stockElement);

  productList.appendChild(div);
}

function renderProductList(data) {
  data.forEach((product) => {
    renderProduct(product);
  });
}

fetch(url)
  .then((res) => res.json())
  .then((data) => (console.log(data), renderProductList(data)));
