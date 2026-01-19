<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Simple Shopping Site</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
    }

    /* Header */
    header {
        position: fixed;
        top: 0;
        right: 0;
        padding: 15px;
    }

    header span {
        font-size: 24px;
        cursor: pointer;
        margin-left: 15px;
    }

    /* Main Layout */
    .container {
        display: flex;
        width: 100%;
        margin-top: 60px;
    }

    .items {
        width: 70%;
        padding: 20px;
    }

    .item {
        border: 1px solid #ccc;
        padding: 15px;
        margin-bottom: 15px;
    }

    .item button {
        margin-right: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }

    .sale {
        color: green;
        font-weight: bold;
    }

    /* Side Panel */
    .panel {
        width: 30%;
        border-left: 2px solid #eee;
        padding: 20px;
        display: none;
    }

    .panel h2 {
        margin-top: 0;
    }

    .panel-item {
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
    }

    .panel-item button {
        margin-top: 5px;
        padding: 3px 8px;
        cursor: pointer;
    }
</style>
</head>
<body>

<header>
    <span onclick="showCart()">🛒</span>
    <span onclick="showWishlist()">❤️</span>
</header>

<div class="container">
    <!-- Items List -->
    <div class="items">
        <h2>Market Items</h2>

        <div class="item">
            <h3>Apple</h3>
            <p>$2 <span class="sale">(1+1 Sale)</span></p>
            <button onclick="addToBag('Apple', true)">Add to Bag</button>
            <button onclick="addToWishlist('Apple')">Add to Wishlist</button>
        </div>

        <div class="item">
            <h3>Bread</h3>
            <p>$3</p>
            <button onclick="addToBag('Bread', false)">Add to Bag</button>
            <button onclick="addToWishlist('Bread')">Add to Wishlist</button>
        </div>

        <div class="item">
            <h3>Milk</h3>
            <p>$4 <span class="sale">(1+1 Sale)</span></p>
            <button onclick="addToBag('Milk', true)">Add to Bag</button>
            <button onclick="addToWishlist('Milk')">Add to Wishlist</button>
        </div>
    </div>

    <!-- Cart Panel -->
    <div class="panel" id="cartPanel">
        <h2>Cart</h2>
        <div id="cartItems"></div>
    </div>

    <!-- Wishlist Panel -->
    <div class="panel" id="wishlistPanel">
        <h2>Wishlist</h2>
        <div id="wishlistItems"></div>
    </div>
</div>

<script>
    const cart = {};
    const wishlist = {};

    function addToBag(item, isSale) {
        const qty = isSale ? 2 : 1;
        cart[item] = (cart[item] || 0) + qty;
        renderCart();
    }

    function addToWishlist(item) {
        wishlist[item] = true;
        renderWishlist();
    }

    function removeFromCart(item) {
        delete cart[item];
        renderCart();
    }

    function removeFromWishlist(item) {
        delete wishlist[item];
        renderWishlist();
    }

    function renderCart() {
        const cartDiv = document.getElementById("cartItems");
        cartDiv.innerHTML = "";

        for (let item in cart) {
            cartDiv.innerHTML += `
                <div class="panel-item">
                    ${item} (Qty: ${cart[item]})<br>
                    <button onclick="removeFromCart('${item}')">Remove</button>
                </div>
            `;
        }
    }

    function renderWishlist() {
        const wishlistDiv = document.getElementById("wishlistItems");
        wishlistDiv.innerHTML = "";

        for (let item in wishlist) {
            wishlistDiv.innerHTML += `
                <div class="panel-item">
                    ${item}<br>
                    <button onclick="removeFromWishlist('${item}')">Remove</button>
                </div>
            `;
        }
    }

    function showCart() {
        document.getElementById("cartPanel").style.display = "block";
        document.getElementById("wishlistPanel").style.display = "none";
    }

    function showWishlist() {
        document.getElementById("wishlistPanel").style.display = "block";
        document.getElementById("cartPanel").style.display = "none";
    }
</script>

</body>
</html>
