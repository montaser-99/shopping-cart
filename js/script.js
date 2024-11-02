// ///////////////////////////////////////////////////
// draw products logic

let productsDom = document.querySelector(".products");

let products = [
  {
    id: 1,
    title: "camera",
    size: "small",
    img: "images/camera.jpg",
    price: 2500,
  },
  {
    id: 2,
    title: "bag",
    size: "medium",
    img: "images/bag.jpg",
    price: 3500,
  },
  {
    id: 3,
    title: "headphone",
    size: "small",
    img: "images/headphone.jpg",
    price: 500,
  },
  {
    id: 4,
    title: "mobile",
    size: "small",
    img: "images/Redmi-12.jpg",
    price: 9500,
  },
];
function Drawproducts() {
  let y = products
    .map((item) => {
      return `
    <div class="product-item">
                 <img src="${item.img}" alt="" class="product-item-imge">
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    <p>price:${item.price}</p>
                    <span> size:${item.size}</span>
                </div>                    
                <div class="product-item-actions">
                   <button class="addtocart" Onclick="addtocart(${item.id})">add to cart</button>
                   <i class="far fa-heart"></i>
                </div>          
            </div>  -->
    `;
    })
    .join("");
  productsDom.innerHTML = y;
}
Drawproducts();
// ///////////////////////////////////////////////////////////////
// add to cart logic
let addto = document.querySelector(".addtocart");
let productsmenu = document.querySelector(".productc-menue");
let totalpriceDom = document.querySelector(".total");
let productsmenuitems = document.querySelector(".productc-menue div");
let badge = document.querySelector(".badge");
let addeditem = localStorage.getItem("productsincart")
  ? JSON.parse(localStorage.getItem("productsincart"))
  : [];
let totalprice = localStorage.getItem("totalPrice")
  ? parseFloat(localStorage.getItem("totalPrice"))
  : 0;
totalpriceDom.innerHTML = `Total price:${totalprice}`; // Display initial total price

// ///prevent clear products from cart when refresh
if (addeditem) {
  addeditem.map((item) => {
    productsmenuitems.innerHTML += `<p>${item.title}</p>`;
  });
  badge.style.display = "block";
  badge.innerHTML = addeditem.length;
}
// /////////////////////////////////

function addtocart(id) {
  if (localStorage.getItem("user")) {
    let choosenitem = products.find((item) => item.id === id);
    // console.log(choosenitem)
    // productsmenuitems.innerHTML+=`<p>${choosenitem[0].title}</p>` <<  if we use filter>>  because filter returns array

    productsmenuitems.innerHTML += `<p>${choosenitem.title}</p>`;
    totalprice += parseFloat(choosenitem.price); // Convert price to number and add it to total
    localStorage.setItem("totalPrice", totalprice);
    totalpriceDom.innerHTML = `<p>total:${totalprice}</p>`

    addeditem = [...addeditem, choosenitem];
    localStorage.setItem("productsincart", JSON.stringify(addeditem));

    let cartproductslength = document.querySelectorAll(".productc-menue div p");
    badge.style.display = "block";
    badge.innerHTML = cartproductslength.length;
  } else {
    window.location = "login.html";
  }
}
// ////////////////////////////////////////////////////////////

// open/close cart menue logic

let shoppingcart = document.querySelector(".shopping-cart");
shoppingcart.addEventListener("click", openmenue);

function openmenue() {
  if (productsmenuitems.innerHTML != "") {
    if (productsmenu.style.display == "none") {
      productsmenu.style.display = "block";
    } else {
      productsmenu.style.display = "none";
    }
  }
}

// ////////////////////////////////////////////////////////////
