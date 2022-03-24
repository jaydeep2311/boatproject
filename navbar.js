function navbar() {
  return `<div class="main-nav">
        <div class="nav">
          <div class="logo">
          <a href="index.html" id="boat-logo"> <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_137f5a28-b960-4963-b1fd-e91c60e436a9_200x.png?v=1640587883"
          alt=""
        /></a>
           
          </div>
          <div class="links">
            <ul class="lists">
              <a href="" id="shop"
                ><li class="shop">shop</li>
                <img src="./down-arrow1.png" alt="" class="down-arrow" />
              </a>
    
              <div class="dash"></div>
              <a href="sunburn.html"> <li class="boat">boAt x Sunburn</li></a>
              <div class="dash"></div>
              <a href="dailydeals.html"><li class="daily">Daily deals</li></a>
              <div class="dash"></div>
              <a href="" id="more"
                ><li class="more">More</li>
                <img src="./down-arrow1.png" alt="" class="down-arrow"
              /></a>
            </ul>
          </div>
          <div class="input">
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png"
            />
            <input type="text" id="searchbar" placeholder="Search..." />
          </div>
          <div class="icons">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gift.png?v=1606314809"
              alt=""
              id="gift"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/user_1.png?v=1606314823"
              alt=""
              id="profile"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cart.png?v=1606314839"
              alt=""
              id="cart"
            />
            <span class="cart-item">0</span>
          </div>
        </div>
      </div>`;
}
export default navbar;
