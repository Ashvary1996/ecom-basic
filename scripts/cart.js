console.log("cartPage");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let totalPrice = 0;

appendCardItems(cartItems);

function appendCardItems(cartItems) {
  cartItems.map(function (elem, index) {
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let price = document.createElement("p");
    let div = document.createElement("div");
    let btn = document.createElement("button");

    img.src = elem.image;
    title.innerText = elem.title;
    price.innerText = "$ " + elem.price;
    btn.innerText = "Remove";

    div.setAttribute("class", "cbox");
    img.setAttribute("class", "cimg");
    title.setAttribute("class", "ctitle");
    btn.setAttribute("class", "cbtnCart");

    div.append(img, title, price, btn);

    btn.addEventListener("click", remove);
    // console.log(elem.price);

    totalPrice = totalPrice + elem.price;
    // console.log("totalprice", totalPrice);

    function remove() {
      // let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      cartItems.splice(index, 1);

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      appendCardItems(cartItems);
      window.location.reload();
      console.log("remover Btn Worked");
    }

    document.getElementById("cartcontainer").append(div);
  });
}

/////////////////////////////////////////////
let cacheUsername = JSON.parse(localStorage.getItem("cacheUsername")) || [];

function displaUSername(cacheUsername) {
  document.getElementById("userLoggedInName").innerHTML =
    "User " + cacheUsername[0].cacheUsername;
}
displaUSername(cacheUsername);

///////////////////////////////////////////////

// Total items
let totalItems = cartItems.length;

// console.log(totalItems);

document.getElementById("count").innerText = totalItems;
document.getElementById("price").innerText = "$ " + totalPrice.toFixed(2);

let totalAmount = totalPrice - totalPrice * (10 / 100);

document.getElementById("totalAmount").innerText =
  "$ " + totalAmount.toFixed(2);

let save = totalPrice - totalAmount;
document.getElementById("save").innerText =
  " Congratulations You will save $ " + save.toFixed(2) + " on this order";

// export {totalAmount};
// export  var totalAmount ;
