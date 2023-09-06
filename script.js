
const product = [
  {
    id: 0,
    image: "image/lp1.png",
    title: "Lenovo Laptop",
    price: 350,
  },
  {
    id: 1,
    image: "image/lp2.png",
    title: "Apple MacBook Air",
    price: 415,
  },
  {
    id: 2,
    image: "image/lp3.jpg",
    title: "Asus Vivo Book",
    price: 220,
  },
  {
    id: 3,
    image: "image/lp4.webp",
    title: "Dell Laptop",
    price: 190,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box' >
            <div class='img-box'>
               <img class='images' src=${image}></img>
            </div>
            <div class='bottom'> 
              <p>${title}</p>
              <h2>$${price}</h2>` +
      "<button class='bt3' onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
            </div>`
    );
  })
  .join("");

var cart = [];
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delelement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0;
  total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartitem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$" + 0 + ".00";
  } else {
    document.getElementById("cartitem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$" + total + ".00";
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                   <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>` +
          "<i class=' fa fa-solid fa fa-trash' onclick='delelement(" +
          j++ +
          ")'></i>" +
          `</div>`
        );
      })
      .join("");
  }
}
