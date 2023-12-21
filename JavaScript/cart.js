const cart = [];

// Function to add items to the cart
function addToCart(itemName, itemPrice, imageUrl, description) {
    const item = { name: itemName, price: itemPrice, image: imageUrl, desc: description };
    cart.push(item);
    window.alert(itemName + " Added To Cart")
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });

    // Display total price
    const totalElement = document.createElement('li');
    totalElement.textContent = `Total: $${totalPrice}`;
    cartList.appendChild(totalElement);
}