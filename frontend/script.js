function getProducts() {
  axios.get("https://fakestoreapi.com/products")
    .then(response => {
      console.log(response.data);
      displayProducts(response.data);
    })
    .catch(error => {
      console.error("Xatolik:", error);
    });
}

function displayProducts(products) {
  const container = document.querySelector(".cards");
  
  if (!container) { 
    console.error("❌ Xatolik: .cards elementi topilmadi!");
    return;
  }

  container.innerHTML = "";

  products.forEach(product => {
    // Yangi card elementi yaratamiz
    const productCard = document.createElement("div");
    productCard.classList.add("card");

    productCard.innerHTML = `
      <div class="top-part">
        <img id="card-img" src="${product.image}" alt="${product.title}">
      </div>

      <div class="bottom-part">
        <p id="product-name">${product.title}</p>
        <p id="price">${product.price}$</p>
        <button id="product-btn">🛒</button>
      </div>

      <div class="footer-part">
        <h3>Rating: ${product.rating.rate}</h3>
      </div>
    `;

    container.appendChild(productCard); 
  });
}


getProducts();
