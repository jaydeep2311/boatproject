import navbar from "./navbar.js";
let navheader = document.querySelector(".nav-header");

navheader.innerHTML = navbar();

var slides = document.querySelectorAll(".slide");

slides.forEach((element, i) => {
  element.style.transform = `translateX(${100 * i}%)`;
});
var curslide = 0;
setTimeout(() => {
  setInterval(() => {
    if (curslide === maxslide - 1) {
      curslide = 0;
    } else {
      curslide++;
    }
    slides.forEach((element, i) => {
      element.style.transform = `translateX(${100 * (i - curslide)}%)`;
    });
  }, 5000);
}, 5000);
const btnRight = document.getElementById("right-arrow");
const btnLeft = document.getElementById("left-arrow");
const maxslide = slides.length;
btnRight.addEventListener("click", function () {
  if (curslide === maxslide - 1) {
    curslide = 0;
  } else {
    curslide++;
  }

  slides.forEach((element, i) => {
    element.style.transform = `translateX(${100 * (i - curslide)}%)`;
  });
});
btnLeft.addEventListener("click", function () {
  if (curslide === 0) {
    curslide = maxslide - 1;
  } else {
    curslide--;
  }
  slides.forEach((element, i) => {
    element.style.transform = `translateX(${100 * (i - curslide)}%)`;
  });
});
//Cart functionality
var cartitems;
cartitems = JSON.parse(localStorage.getItem("cartitems"));
if (!cartitems) {
  localStorage.setItem("cartitems", JSON.stringify([]));
}
displaycarditems(cartitems);
var bsdata = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28.png?v=1642405569",
    title: "boAt Airdopes 131 - Wireless Earbuds",
    price: "Rs. 1,299.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
    title: "boAt Airdopes 131 - Wireless Earbuds",
    price: "Rs. 1,299.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/merucry-3_300x.png?v=1639400858",
    title: "boAt Airdopes 131 - Wireless Earbuds",
    price: "Rs. 1,299.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
    title: "boAt Airdopes 131 - Wireless Earbuds",
    price: "Rs. 1,299.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
];
var jldata = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6370be21-3c2f-48a8-bb18-edc49a667081_300x.png?v=1643619646",
    title: "boAt Bassheads 950v2",
    price: "Rs. 899",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_affc1a7f-f714-4952-9c58-3de269539350_300x.png?v=1645099233",
    title: "boAt Bassheads 950v2",
    price: "Rs. 899",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_300x.png?v=1643477993",
    title: "boAt Bassheads 950v2",
    price: "Rs. 899",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_b6563f96-f1a1-4915-b686-d4e37232ec3c_300x.png?v=1644301638",
    title: "boAt Bassheads 950v2",
    price: "Rs. 899",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_099e5dad-39c3-4ef5-8fc2-6d9b5ca8bb91_300x.png?v=1642569325",
    title: "boAt Bassheads 950v2",
    price: "Rs. 899",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6370be21-3c2f-48a8-bb18-edc49a667081_300x.png?v=1643619646",
    title: "boAt Bassheads 950v2",
    price: "Rs. 899",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
];
let swdata = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/merucry-3_300x.png?v=1639400858",
    title: "boAt Watch Mercury",
    price: "Rs. 2,499.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_300x.png?v=1645164257",
    title: "boAt Watch Mercury",
    price: "Rs. 2499",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60_300x.png?v=1625046217",
    title: "boAt Watch Mercury",
    price: "Rs. 2499",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_40d014f0-4495-47a8-bad5-2495ae08d379_300x.png?v=1635140773",
    title: "boAt Watch Mercury",
    price: "Rs. 2499",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_300x.png?v=1625045743",
    title: "boAt Watch Mercury",
    price: "Rs. 2499",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_6370be21-3c2f-48a8-bb18-edc49a667081_300x.png?v=1643619646",
    title: "boAt Bassheads 950v2",
    price: "Rs. 899",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
];
let twdata = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_300x.png?v=1625046259",
    title: "boAt Rockerz 255 Pro+",
    price: "Rs. 1,349.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_300x.png?v=1574927262",
    title: "boAt Rockerz 255 Pro+",
    price: "Rs. 1,349.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8ec58553-3255-48ec-929e-4838215b640c_300x.png?v=1625046271",
    title: "boAt Rockerz 255 Pro+",
    price: "Rs. 1,349.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eab9128d-65cf-42ce-83a1-03492ec6157d_300x.png?v=1625046386",
    title: "boAt Rockerz 255 Pro+",
    price: "Rs. 1,349.00",
    li: `<li>Lightweight for portability</li>
    <li>Uninterrupted listening for 3 hours</li>
    <li>Truly wireless at a truly awesome price</li>`,
  },
];
//Add to cart functionality
var cartitems;
cartitems = JSON.parse(localStorage.getItem("cartitems"));
if (!cartitems) {
  localStorage.setItem("cartitems", JSON.stringify([]));
}
displaycarditems(cartitems);

//Main data
var maindata = [bsdata, jldata, [], swdata, twdata];
maindata.forEach(function (el, i) {
  el.forEach(function (element) {
    if (i !== 2) {
      let box = document.createElement("div");
      box.setAttribute("class", "box");
      box.classList.add(`box-${i + 1}`);
      let img = document.createElement("img");
      img.src = element.img;
      let content = document.createElement("div");
      content.setAttribute("class", "content");
      let title = document.createElement("p");
      title.setAttribute("class", "title");
      title.textContent = element.title;
      let price = document.createElement("p");
      price.setAttribute("class", "price");
      price.textContent = element.price;
      let ul = document.createElement("ul");
      ul.setAttribute("class", "product-list");
      ul.innerHTML = element.li;
      let button = document.createElement("button");
      button.type = "button";
      button.setAttribute("class", "cart-btn");
      button.textContent = "Add to cart";
      button.addEventListener("click", function (e) {
        e.preventDefault();
        cartitems = JSON.parse(localStorage.getItem("cartitems"));
        cartitems.push(element);
        localStorage.setItem("cartitems", JSON.stringify(cartitems));
        displaycarditems(cartitems);
        updateCartview();
      });
      content.append(title, price, ul, button);
      box.append(img, content);
      let smallcontainer = document.querySelector(`.smc-${i + 1}`);
      smallcontainer.append(box);
    }
  });
});
//Diaplay cartitems
// function displaycarditems(data) {
//   let spancart = document.querySelector(".cart-item");
//   spancart.textContent = data.length;
// }

// ALL SLIDER COMPONENTS
var curcard = 0;
let cards = document.querySelectorAll(".box-1");
let cards2 = document.querySelectorAll(".box-2");
let cards3 = document.querySelectorAll(".box-3");
let cards4 = document.querySelectorAll(".box-4");
let cards5 = document.querySelectorAll(".box-5");
let rightred = document.getElementById("right-arrow-red");
let leftred = document.getElementById("left-arrow-red");
let rightred1 = document.getElementById("right-arrow-red1");
let leftred1 = document.getElementById("left-arrow-red1");
let rightred2 = document.getElementById("right-arrow-red2");
let leftred2 = document.getElementById("left-arrow-red2");
let rightred3 = document.getElementById("right-arrow-red3");
let leftred3 = document.getElementById("left-arrow-red3");
let rightred4 = document.getElementById("right-arrow-red4");
let leftred4 = document.getElementById("left-arrow-red4");
rightred.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards.forEach((element, i) => {
    element.style.left = "30%";
  });
});
rightred1.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards2.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred1.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards2.forEach((element, i) => {
    element.style.left = "30%";
  });
});
rightred2.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards3.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred2.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards3.forEach((element, i) => {
    element.style.left = "30%";
  });
});
rightred3.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards4.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred3.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards4.forEach((element, i) => {
    element.style.left = "30%";
  });
});
rightred4.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards5.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred4.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards5.forEach((element, i) => {
    element.style.left = "30%";
  });
});
//NEW LAUNCHES SLIDER
var slidedata = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/425_300x.png?v=1645772065",
    heading: "ROCKERZ 425",
    description:
      "Immerse in the vibe with Rockerz 425 & its powerful 40mm drivers. With 25H of playback, enjoy every track without a break. Gamers, we got you! Rockerz 425 comes with BEAST™ Mode — enable it with a dedicated button & make precise kills with low latency. Ran out of juice? No problem! With ASAP Charge, get 10H of backup by charging only for 10MINS. With its ENx Technology be clearly heard. What’s more? Enjoy dual pairing, Bluetooth v5.2, Easy Access Control, & a perfect adaptive fit to cater to your long gaming hours!",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Watch-Blaze-Shot-2.4_300x.png?v=1645771960",
    heading: "Watch Blaze",
    description:
      "Whatever you need to hustle to your goal — now do it Faster with Blaze. It’s powered by Apollo 3 Blue Plus high-performance processor that makes its interface 25% faster. Navigate through your world effortlessly with its 1.75” HD display — the largest by boAt. We understand your hustle, that’s why its Fast Charge technology gives 24HRS of backup with just 10MINS of charge. Keep your fitness in check with heart rate and SpO2 monitoring, daily activity tracker, and 14 sport modes. Smart Watch Blaze — for trailblazers like you.",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/nl-1750_300x.jpg?v=1645417150",
    heading: "boAt Aavante Bar 1750",
    description:
      "Make your movie nights 10X better with Aavante Bar 1750's theatre-like sound. Leave behind old ways of entertainment and immerse into a cinematic experience with the 120 Watt RMS boAt Signature Sound and 80W wireless subwoofer. Feel the thump of deep and thrilling bass and revolutionize how you listen to your entertainment. Its multiple EQ Modes is all you need to set the vibe right, including Jazz, Pop, Rock, and Classical. Don't move an inch to navigate through its multiple options with its Easy Access Remote. Revolutionize your entertainment with Aavante Bar 1750.",
  },
];
var curslidedata = 0;
let right_arrow5 = document.getElementById("right-arrow-red5");
let left_arrow5 = document.getElementById("left-arrow-red5");
right_arrow5.addEventListener("click", function () {
  if (curslidedata == slidedata.length - 1) {
    curslidedata = 0;
  } else {
    curslidedata++;
  }
  setTimeout(() => {
    let img = document.getElementById("inner-img");
    img.src = slidedata[curslidedata].img;
    let head = document.querySelector(".inner-right-head");
    head.textContent = slidedata[curslidedata].heading;
    let description = document.querySelector(".inner-right-content");
    description.textContent = slidedata[curslidedata].description;
  }, 500);
});
left_arrow5.addEventListener("click", function () {
  if (curslidedata == 0) {
    curslidedata = slidedata.length - 1;
  } else {
    curslidedata--;
  }
  setTimeout(() => {
    let img = document.getElementById("inner-img");

    img.src = slidedata[curslidedata].img;

    let head = document.querySelector(".inner-right-head");
    head.textContent = slidedata[curslidedata].heading;
    let description = document.querySelector(".inner-right-content");
    description.textContent = slidedata[curslidedata].description;
  }, 500);
});
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
//Add to cart functionality

function displaycarditems(data) {
  let spancart = document.querySelector(".cart-item");
  spancart.textContent = data.length;
}

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
let nav = document.querySelector(".nav-header");
let container = document.createElement("div");
container.setAttribute("id", "container");
shop.addEventListener("mouseover", function (e) {
  container.setAttribute("id", "container");
  e.preventDefault();

  let output = "";
  img_arr.forEach((ele) => {
    output += `<img src = ${ele}/>`;
  });
  container.innerHTML = output;
  container.style.width = "100%";
  container.style.position = "absolute";
  container.style.height = "75vh";
  container.style.zIndex = "5";
  nav.append(container);
});

container.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  container.style.zIndex = "0";
  container.innerHTML = "";
  container.removeAttribute("id");
});
let profile = document.getElementById("profile");
profile.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "login.html";
});
let sidebar = document.createElement("div");
sidebar.setAttribute("class", "sidebar");
navheader.append(sidebar);
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
