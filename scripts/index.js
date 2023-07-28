// import mensData from './mensData.js';
// import womensData from './womensData.js';
console.log("Home Page");
let cacheUsername = JSON.parse(localStorage.getItem("cacheUsername")) || [];

function displaUSername(cacheUsername) {
  document.getElementById("userLoggedInName").innerHTML =
    "User " + cacheUsername[0].cacheUsername;
}
displaUSername(cacheUsername);

/////////////////////////////////////////////

// Home Page

async function fetchData() {
  let url = "https://fakestoreapi.com/products";
  let response = await fetch(url);
  let data = await response.json();
  append(data);
  // console.log(data);
}
fetchData();

function append(data) {
  let container = document.getElementById("container");

  data.forEach(function (elem) {
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let price = document.createElement("p");
    let description = document.createElement("p");
    let div = document.createElement("div");
    let btn = document.createElement("button");

    img.src = elem.image;
    title.innerText = elem.title;
    price.innerText = "$ " + elem.price;
    description.innerText = elem.description;
    btn.innerText = "Add to Cart";

    div.setAttribute("class", "box");
    description.setAttribute("class", "desc");
    img.setAttribute("class", "img");
    btn.setAttribute("class", "btnCart");
    btn.addEventListener("click", saveCart);

    function saveCart() {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push(elem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    div.append(img, title, price, description, btn);
    container.append(div);
    // console.log(cartItems);
  });
}
