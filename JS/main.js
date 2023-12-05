let apiList = [];
let basketlist = [];

const toggleModal = () => {
  const basketModaEl = document.querySelector(".basket-modal");
  basketModaEl.classList.toggle("active");

  event.preventDefault();
};

const getApi = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log(data);
    apiList = data;
    createHTML();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
getApi();

const createHTML = () => {
  const shopList = document.querySelector(".cards");
  let apilisthtml = "";
  apiList.forEach((data) => {
    apilisthtml += `<div class="cart-items">
      <div class="card">
        <img src="${data.image}" alt="">
        <h4 id="h4">${data.title}</h4>
        <span class="product-price">${data.price}</span>
        <button class="add-to-cart-button" onclick="addtoBasket(${data.id})">Səbətə əlavə et</button>
      </div>
    </div>`;
  });
  shopList.innerHTML = apilisthtml;
};
const listBasketItems = () => {
  const basketListEl = document.querySelector(".product-items");
  let basketListHtml = "";

  basketlist.forEach((item) => {
    basketListHtml += `
      <div class="product">
        <div class="product-text">
          <h4>${item.product.title}</h4>
          <p>${item.product.price}</p>
        </div>
        <img src="${item.product.image}">
      </div>`;
  });

  basketListEl.innerHTML = basketListHtml;
};

listBasketItems();

const addtoBasket = (dataId) => {
  let findedProduct = apiList.find((product) => product.id === dataId);
  if (findedProduct) {
    const basketIndex = basketlist.findIndex(
      (basket) => basket.product.id == dataId
    );
    if (basketIndex == -1) {
      let addedItem = { quantity: 1, product: findedProduct };
      basketlist.push(addedItem);
    } else {
      basketlist[basketIndex].quantity += 1;
    }
    // console.log(basketlist);
    listBasketItems();
  }
};
