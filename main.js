const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const favoriteCount = document.getElementById('favorite-count');

import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        const product = doc.data();
        // Product ko webpage par display karein
    });
}

loadProducts();

let cart = [];

function addToCart(productId) {
    cart.push(productId);
    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(id => id !== productId);
    updateCartCount();
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

// let favorites = [];

// function addToFavorites(productId) {
//     if (!favorites.includes(productId)) {
//         favorites.push(productId);
//         updateFavoriteCount();
//     }
// }

// function removeFromFavorites(productId) {
//     favorites = favorites.filter(id => id !== productId);
//     updateFavoriteCount();
// }

// function updateFavoriteCount() {
//     favoriteCount.textContent = favorites.length;
// }

function checkout() {
    if (cart.length === 0) {
        alert("Aapka cart khaali hai!");
        return;
    }
    // Checkout ka amal yahan anjaam dein
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.dataset.productId;
        addToCart(productId);
    } else if (event.target.classList.contains('add-to-favorites')) {
        const productId = event.target.dataset.productId;
        addToFavorites(productId);
    }
});


// Favorite buttons ko select karein
const favoriteButtons = document.querySelectorAll('.favorite-btn');
const favoritesContainer = document.querySelector('.favorites-container');

favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement.cloneNode(true);
        productCard.querySelector('.favorite-btn').remove();
        favoritesContainer.appendChild(productCard);
    });
});


// Cart buttons ko select karein
const cartButtons = document.querySelectorAll('.cart-btn');
let cart1 = JSON.parse(localStorage.getItem('cart')) || [];

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.parentElement.querySelector('h3').innerText,
            description: button.parentElement.querySelector('p').innerText,
            image: button.parentElement.querySelector('img').src
        };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to your cart.`);
    });
});
