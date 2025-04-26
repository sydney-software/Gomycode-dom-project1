// Function to update total price
function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

// Function to handle like button
function toggleLike(event) {
    const button = event.currentTarget;
    button.classList.toggle('liked');
}

// Function to increase item quantity
function increaseQuantity(event) {
    const item = event.currentTarget.closest('.cart-item');
    const quantityElement = item.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
}

// Function to decrease item quantity
function decreaseQuantity(event) {
    const item = event.currentTarget.closest('.cart-item');
    const quantityElement = item.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
    updateTotal();
}

// Function to delete item
function deleteItem(event) {
    const item = event.currentTarget.closest('.cart-item');
    item.remove();
    updateTotal();
}

// Add event listeners to buttons
document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', increaseQuantity);
});

document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', decreaseQuantity);
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', deleteItem);
});

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', toggleLike);
});

// Initial total price calculation
updateTotal();
