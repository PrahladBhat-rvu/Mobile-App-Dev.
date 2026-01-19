<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .container {
            display: flex;
            gap: 30px;
        }
        .section {
            flex: 1;
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 5px;
        }
        h2 {
            margin-top: 0;
        }
        button {
            padding: 10px 15px;
            margin: 5px 5px 5px 0;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
        }
        button:hover {
            background-color: #0056b3;
        }
        .remove-btn {
            background-color: #dc3545;
            padding: 5px 10px;
            font-size: 12px;
        }
        .remove-btn:hover {
            background-color: #c82333;
        }
        .item {
            padding: 10px;
            margin: 10px 0;
            background-color: #f9f9f9;
            border-left: 4px solid #007bff;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .empty {
            color: #999;
        }
    </style>
</head>
<body>
    <h1>Shopping Manager</h1>
    
    <div>
        <button onclick="addToBag()">Add to Bag</button>
        <button onclick="addPromotionItem()">Add 1+1 Sale Items</button>
        <button onclick="moveToWishlist()">Move to Wish List</button>
    </div>

    <div class="container">
        <div class="section">
            <h2>Shopping Cart</h2>
            <div id="cart"></div>
        </div>
        <div class="section">
            <h2>Wish List</h2>
            <div id="wishlist"></div>
        </div>
    </div>

    <script>
        let cart = [];
        let wishlist = [];
        let itemId = 0;

        function addToBag() {
            const item = {
                id: itemId++,
                name: `Item ${itemId}`,
                price: Math.floor(Math.random() * 100) + 10
            };
            cart.push(item);
            renderCart();
        }

        function addPromotionItem() {
            const item = {
                id: itemId++,
                name: `1+1 Sale Item ${itemId}`,
                price: Math.floor(Math.random() * 50) + 5,
                promotion: true
            };
            cart.push(item);
            renderCart();
        }

        function moveToWishlist() {
            if (cart.length > 0) {
                const item = cart.shift();
                wishlist.push(item);
                renderCart();
                renderWishlist();
            }
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            renderCart();
        }

        function removeFromWishlist(id) {
            wishlist = wishlist.filter(item => item.id !== id);
            renderWishlist();
        }

        function renderCart() {
            const cartDiv = document.getElementById('cart');
            if (cart.length === 0) {
                cartDiv.innerHTML = '<p class="empty">Cart is empty</p>';
                return;
            }
            cartDiv.innerHTML = cart.map(item => `
                <div class="item">
                    <span>${item.name} ${item.promotion ? '(1+1 Sale)' : ''} - $${item.price}</span>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `).join('');
        }

        function renderWishlist() {
            const wishlistDiv = document.getElementById('wishlist');
            if (wishlist.length === 0) {
                wishlistDiv.innerHTML = '<p class="empty">Wish list is empty</p>';
                return;
            }
            wishlistDiv.innerHTML = wishlist.map(item => `
                <div class="item">
                    <span>${item.name} - $${item.price}</span>
                    <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
                </div>
            `).join('');
        }

        renderCart();
        renderWishlist();
    </script>
</body>
</html>
