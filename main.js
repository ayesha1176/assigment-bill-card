function calculateTotal() {
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(price) || isNaN(quantity)) {
        alert("Please enter valid numbers for price and quantity.");
        return;
    }

    const total = price * quantity;
    document.getElementById('totalPrice').innerText = `$${total.toFixed(2)}`;
}