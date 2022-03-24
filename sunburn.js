import navbar from "./navbar.js";

let header = document.getElementById("header");

header.innerHTML = navbar();

let data = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_14283327-13d2-44d7-8849-7f1e103b2968_255x255.png?v=1645014291",
    title: "Airdopes 441 Sunburn Edition",
    price: "2999.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_477b0686-02b2-4289-9e53-d663dfb08e37_255x255.png?v=1645016541",
    title: "boAt Rockerz 550 Sunburn Edition",
    price: "1999.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d46d18bd-17a2-417a-af86-9f851bdf7068_255x255.png?v=1645083010",
    title: "boAt BassHeads 172 Sunburn Edition",
    price: "549.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_3359e1b6-e859-4856-a01f-94fa78a5777e_255x255.png?v=1645082189",
    title: "boAt Stone 1200F Sunburn Edition",
    price: "3999.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_f295a600-2857-4ff8-940c-3873fc2f1367_255x255.png?v=1645015211",
    title: "boAt BassHeads 152 Sunburn Edition",
    price: "549.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f42fc2b0-06e8-4b30-b570-b88583c504a1_255x255.png?v=1645083199",
    title: "boAt Airdopes 381 Sunburn Edition",
    price: "2499.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b87626c2-936f-4ee6-a35a-7fddc8ad9746_255x255.png?v=1645017832",
    title: "boAt Stone 1200 Sunburn Edition ",
    price: "3999.00",
  },
];
let container = document.getElementById("container");

let sortbtn = document.getElementById("sort_item");

display_boat(data);

let product = JSON.parse(localStorage.getItem("cartitems"));
if (product == null) {
  localStorage.setItem("cartitems", JSON.stringify([]));
}
/// count item at navbar
displaycarditems(product);

function displaycarditems(data) {
  let spancart = document.querySelector(".cart-item");
  spancart.textContent = data.length;
}

function display_boat(data) {
  container.innerHTML = "";
  data.forEach((user) => {
    let data_card = document.createElement("div");
    let img = document.createElement("img");
    img.src = user.img;
    let title = document.createElement("p");
    title.textContent = user.title;
    let price = document.createElement("p");
    price.textContent = `Rs. ${user.price}`;

    let cart_btn = document.createElement("button");
    cart_btn.textContent = "Add to Cart";
    cart_btn.onclick = function () {
      add_to_cart(user);
    };
    data_card.append(img, title, price, cart_btn);

    container.append(data_card);
  });
}

function add_to_cart(prod) {
  setTimeout(function () {
    display(prod);
  }, 1000);
  let cart = JSON.parse(localStorage.getItem("cartitems"));
  cart.push(prod);

  localStorage.setItem("cartitems", JSON.stringify(cart));

  displaycarditems(cart);
}

function display(prod) {
  let prod_div = document.createElement("div");
  prod_div.textContent = prod.title;
  alert(`${prod_div.textContent}\n  Added to the cart succesfully `);
}

sortbtn.addEventListener("change", sortProducts);

function sortProducts() {
  let sort_criteria = sortbtn.value; //"featured" , "low" , "high"
  let updated_data = data.sort((prodA, prodB) => {
    if (sort_criteria == "low") {
      return parseInt(prodA.price) - parseInt(prodB.price);
    } else if (sort_criteria == "high") {
      return parseInt(prodB.price) - parseInt(prodA.price);
    }
  });
  console.log(updated_data);
  display_boat(updated_data);
}

//More dropdown js
var morelists = [
  "Gifting",
  "Offer zone",
  "Do what FLoats your boAt",
  "Meet the boAtheads",
  "Earn rs100",
];
let more = document.querySelector(".more");
more.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  let div = document.createElement("div");

  let ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.flexDirection = "column";
  ul.style.justifyContent = "space-between";
  ul.style.height = "80%";
  ul.style.paddingTop = "10px";
  ul.style.paddingBottom = "10px";
  for (var i = 0; i < morelists.length; i++) {
    let a = document.createElement("a");
    a.href = `${morelists[i]}.html`;
    let li = document.createElement("li");
    li.setAttribute("class", "morelists");
    a.style.textDecoration = "none";
    a.setAttribute("class", "alist");
    li.textContent = morelists[i];
    a.append(li);
    ul.append(a);
  }
  div.append(ul);

  div.style.width = "250px";
  div.style.height = "200px";
  div.style.backgroundColor = "black";
  div.style.position = "absolute";
  div.style.zIndex = "1";

  more.append(div);
});
more.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  more.innerHTML = "";
  more.textContent = "More";
});

// shop category hover effect
var img_arr = [
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS.png?v=1612338251",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271.png?v=1612338387",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear.jpg?v=1644836883",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895.png?v=1612338356",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5.png?v=1612338436",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a.png?v=1622452897",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash.jpg?v=1644836858",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09.png?v=1615033153",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition.png?v=1612338560",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop.png?v=1624859990",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image.png?v=1626094103",
];
let shop = document.getElementById("shop");

let container1 = document.createElement("div");
container1.setAttribute("id", "container1");
shop.addEventListener("mouseover", function (e) {
  container1.setAttribute("id", "container");
  e.preventDefault();

  let output = "";
  img_arr.forEach((ele) => {
    output += `<img src = ${ele}/>`;
  });
  container1.innerHTML = output;
  container1.style.width = "100%";
  container1.style.position = "absolute";
  container1.style.height = "75vh";
  container1.style.zIndex = "5";
  header.append(container1);
});
let slider = document.querySelector(".slider");
container1.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  container1.style.zIndex = "0";
  container1.innerHTML = "";
  container1.removeAttribute("id");
});

let profile = document.getElementById("profile");
profile.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "login.html";
});

let sidebar = document.createElement("div");
sidebar.setAttribute("class", "sidebar");
header.append(sidebar);
var toggle = 0;
const cart_button = document.getElementById("cart");
cart_button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(sidebar);
  if (toggle === 0) {
    sidebar.classList.add("sidebartoggle");
    toggle = 1;
  } else {
    sidebar.classList.remove("sidebartoggle");
    toggle = 0;
  }
});

function updateCartview() {
  let localcartitems = JSON.parse(localStorage.getItem("cartitems"));
  if (localcartitems.length !== 0) {
    sidebar.innerHTML = "";
    sidebar.style.display = "block";
    console.log(localcartitems.length);
    sidebar.style.overflowY = "scroll";
    let cartheader = document.createElement("div");
    cartheader.setAttribute("class", "cart-header");
    cartheader.textContent = `YOUR CART (${localcartitems.length} item)`;
    sidebar.append(cartheader);
    localcartitems.forEach(function (element) {
      let cartcard = document.createElement("div");
      cartcard.style.display = "flex";
      cartcard.style.justifyContent = "space-between";
      cartcard.style.alignItems = "center";
      let img = document.createElement("img");
      img.src = element.img;
      img.style.width = "100px";
      img.style.height = "100px";
      let title = document.createElement("p");
      title.textContent = ` Product name: ${element.title}`;
      let price = document.createElement("p");
      price.textContent = `PRICE: ${element.price}`;
      cartcard.append(img, title, price);
      sidebar.append(cartcard);
    });
    let cartfooter = document.createElement("div");
    let contShop = document.createElement("a");
    contShop.href = "index.html";
    contShop.style.textDecoration = "none";
    contShop.style.color = "Red";
    contShop.style.fontSize = "large";
    contShop.textContent = "Continue shopping";
    let paybtn = document.createElement("button");
    paybtn.type = "button";
    paybtn.style.width = "300px";
    paybtn.style.padding = "10px";
    paybtn.textContent = "Continue for payment";
    paybtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "payment.html";
    });
    paybtn.style.backgroundColor = "#ff0000";
    paybtn.style.color = "white";
    paybtn.style.borderRadius = "3px";
    paybtn.style.border = "none";
    cartfooter.style.display = "flex";
    cartfooter.style.flexDirection = "column";
    cartfooter.style.marginTop = "30%";
    cartfooter.style.marginLeft = "15%";
    contShop.style.marginBottom = "5%";
    cartfooter.style.alignItems = "center";
    cartfooter.append(contShop, paybtn);
    sidebar.append(cartfooter);
  } else {
    sidebar.innerHTML = "";
    let img = document.createElement("img");
    img.src =
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bag_925d9ab5-b7d8-4b86-bfc5-2cb9b4df471e.png?v=1633452372";
    let h4 = document.createElement("h4");
    h4.textContent = "YOUR COLLECTION IS EMPTY";
    h4.style.color = "#ff0000";
    h4.style.marginTop = "10%";
    let div = document.createElement("div");
    sidebar.style.display = "flex";
    sidebar.style.justifyContent = "center";
    sidebar.style.alignItems = "center";
    div.append(img, h4);
    sidebar.append(div);
  }
}
updateCartview();
