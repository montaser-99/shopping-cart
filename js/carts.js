let productsDom = document.querySelector(".products");
let productsincart = localStorage.getItem("productsincart");
let totalPriceDom = document.querySelector(".total");
if (productsincart) {
  let items = JSON.parse(productsincart);
  Drawproducts(items);
}

function Drawproducts(products) {
  let y = products
    .map((item) => {
      return `
      <div class="product-item">
                   <img src="${item.img}" alt="" class="product-item-imge">
                  <div class="product-item-desc">
                      <h2>${item.title}</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                      <span>${item.size}</span>
                  </div>                    
                  <div class="product-item-actions">
                     <button class="addtocart" onclick="removeFromCart(${item.id})">remove from cart</button>
                    
                  </div>          
              </div>  -->
      `;
    })
    .join("");
  productsDom.innerHTML = y;
}
//   ///////////////////////////////
function removeFromCart(id) {
  console.log("Removing item with ID:", id);

  // Retrieve the products in cart from localStorage
  let productsincart = localStorage.getItem("productsincart");

  if (productsincart) {
    // Parse the stored JSON string into an array
    let items = JSON.parse(productsincart);
    const itemIndex = items.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // Get the price of the item being removed
      const removedItemPrice = parseFloat(items[itemIndex].price);

      // Remove the item from the array
      items.splice(itemIndex, 1);
      localStorage.setItem("productsincart", JSON.stringify(items));

      // Re-render the cart items
      Drawproducts(items);

      // Recalculate total price
      let totalPrice = items.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
      localStorage.setItem("totalPrice", totalPrice); // Update localStorage

      // Update the total price display
      totalPriceDom.innerHTML = totalPrice;
    }
  }
}

// /////////////////////////////////
