import navbar from "./navbar.js";
let header = document.getElementById("header")

header.innerHTML = navbar();

let cartitems = JSON.parse(document.getElementById("cartitems"));
if(cartitems == null){
    localStorage.setItem("cartitems" , JSON.stringify([]));
}

 display_Data();
function display_Data(){
    let cart_box = document.getElementById("cart_box");
   let cartitems = JSON.parse(localStorage.getItem("cartitems"));
     let pic_div = document.createElement("div");
     


}