// Keep track of items currently in the shopping cart
let cart = [];

// DOM Elements
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// 1. Listen for clicks on the "Add to Cart" buttons
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the parent product card element to read its dataset data
        const productCard = e.target.closest('.product-card');
        const id = productCard.getAttribute('data-id');
        const name = productCard.getAttribute('data-name');
        const price = parseFloat(productCard.getAttribute('data-price'));

        addToCart(id, name, price);
    });
});

// 2. Add Item Function
function addToCart(id, name, price) {
    // Check if item is already in the cart to increase quantity, or add it new
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCartUI();
}

// 3. Remove Item Function
function removeFromCart(id) {
    // Filter out the item with the matching ID
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// 4. Update interface and recalculate running total
function updateCartUI() {
    // Clear the current list layout
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty.</p>';
        totalPriceElement.textContent = '0.00';
        return;
    }

    let total = 0;

    // Loop through the items array to render them and calculate the total bill
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <div>
                <strong>${item.name}</strong> <br>
                <small>$${item.price} x ${item.quantity}</small>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        
        cartItemsContainer.appendChild(li);
    });

    // Update the dynamic total element with exactly two decimal places
    totalPriceElement.textContent = total.toFixed(2);
}