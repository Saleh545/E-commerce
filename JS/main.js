let apiList = [];

const toggleModal = () => {
  const basketModaEl = document.querySelector(".basket-modal");
  basketModaEl.classList.toggle("active");

  event.preventDefault();
};

const getApi = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

    // Api-dən alınan məlumatları apiList massivinə əlavə et
    apiList = data;

    // createHTML funksiyasını çağır
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
        <button class="add-to-cart-button" onclick="addtobasket(${data.id})">Səbətə əlavə et</button>
      </div>
    </div>`;
  });
  shopList.innerHTML = apilisthtml;
};
