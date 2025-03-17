const productContainer = document.querySelector(".product-container");

db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const product = doc.data();
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="assets/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="cart-btn">Add to Cart</button>
            </div>
        `;
    });
});
