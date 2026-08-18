document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    const nlForm = document.querySelector('.newsletter-form');
    if (nlForm) {
        nlForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('Thanks for subscribing!');
            this.reset();
        });
    }

    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }

    if (document.getElementById('products-grid')) {
        loadProductsPage();
    }

    if (document.getElementById('product-detail')) {
        loadProductDetail();
    }

    if (document.getElementById('cart-items')) {
        loadCartPage();
    }

    if (document.getElementById('checkout-form')) {
        loadCheckoutPage();
    }
});

function loadFeaturedProducts() {
    const products = getProducts().filter(p => p.active).slice(0, 6);
    const grid = document.getElementById('featured-products');
    grid.innerHTML = products.map(p => createProductCard(p)).join('');
}

function createProductCard(p) {
    const stars = getStars(p.rating);
    const imgSrc = p.image || 'images/cctv-dome.jpg';

    return `
        <div class="product-card">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            <div class="product-image">
                <img src="${imgSrc}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="category">${p.category}</span>
                <h3>${p.name}</h3>
                <div class="rating">${stars} (${p.reviews})</div>
                <div class="price">
                    Rs. ${p.price.toLocaleString()}
                    ${p.oldPrice ? `<span class="old-price">Rs. ${p.oldPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Add to Cart</button>
                    <a href="product-detail.html?id=${p.id}" class="btn btn-secondary btn-sm">View</a>
                </div>
            </div>
        </div>
    `;
}

function getStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

let currentFilters = {
    category: 'all',
    brand: 'all',
    search: '',
    sort: 'default'
};

function loadProductsPage() {
    const products = getProducts().filter(p => p.active);
    renderProducts(products);
    setupFilters(products);

    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat) {
        currentFilters.category = cat;
        const filterSelect = document.getElementById('filter-category');
        if (filterSelect) filterSelect.value = cat;
        filterProducts();
    }
}

function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    const count = document.getElementById('result-count');

    if (products.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><h2>No products found</h2><p>Try adjusting your filters</p></div>';
        if (count) count.textContent = '0 products found';
        return;
    }

    if (count) count.textContent = products.length + ' products found';
    grid.innerHTML = products.map(p => createProductCard(p)).join('');
}

function setupFilters() {
    const catFilter = document.getElementById('filter-category');
    const brandFilter = document.getElementById('filter-brand');
    const searchInput = document.getElementById('filter-search');
    const sortSelect = document.getElementById('sort-products');

    if (catFilter) catFilter.addEventListener('change', filterProducts);
    if (brandFilter) brandFilter.addEventListener('change', filterProducts);
    if (searchInput) searchInput.addEventListener('input', filterProducts);
    if (sortSelect) sortSelect.addEventListener('change', filterProducts);
}

function filterProducts() {
    const catFilter = document.getElementById('filter-category');
    const brandFilter = document.getElementById('filter-brand');
    const searchInput = document.getElementById('filter-search');
    const sortSelect = document.getElementById('sort-products');

    currentFilters.category = catFilter ? catFilter.value : 'all';
    currentFilters.brand = brandFilter ? brandFilter.value : 'all';
    currentFilters.search = searchInput ? searchInput.value.toLowerCase() : '';
    currentFilters.sort = sortSelect ? sortSelect.value : 'default';

    let products = getProducts().filter(p => p.active);

    if (currentFilters.category !== 'all') {
        products = products.filter(p => p.category === currentFilters.category);
    }
    if (currentFilters.brand !== 'all') {
        products = products.filter(p => p.brand === currentFilters.brand);
    }
    if (currentFilters.search) {
        products = products.filter(p =>
            p.name.toLowerCase().includes(currentFilters.search) ||
            p.description.toLowerCase().includes(currentFilters.search)
        );
    }

    switch (currentFilters.sort) {
        case 'price-low': products.sort((a, b) => a.price - b.price); break;
        case 'price-high': products.sort((a, b) => b.price - a.price); break;
        case 'rating': products.sort((a, b) => b.rating - a.rating); break;
        case 'name': products.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    renderProducts(products);
}

function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const products = getProducts();
    const product = products.find(p => p.id === id);

    if (!product) {
        document.getElementById('product-detail').innerHTML = '<div class="empty-state"><h2>Product not found</h2></div>';
        return;
    }

    const stars = getStars(product.rating);
    const specsHtml = Object.entries(product.specs).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('');
    const imgSrc = product.image || 'images/cctv-dome.jpg';

    document.getElementById('product-detail').innerHTML = `
        <div class="detail-image">
            <img src="${imgSrc}" alt="${product.name}">
        </div>
        <div class="detail-info">
            <span class="category" style="color:var(--primary);font-weight:600;text-transform:uppercase;font-size:0.85rem;">${product.category}</span>
            <h1>${product.name}</h1>
            <div class="rating">${stars} ${product.rating} (${product.reviews} reviews)</div>
            <div class="price">
                Rs. ${product.price.toLocaleString()}
                ${product.oldPrice ? `<span class="old-price">Rs. ${product.oldPrice.toLocaleString()}</span>` : ''}
            </div>
            <p class="description">${product.description}</p>
            <ul class="specs">${specsHtml}</ul>
            <p style="margin-bottom:20px;font-size:0.9rem;color:${product.stock > 10 ? 'var(--success)' : 'var(--danger)'}">
                ${product.stock > 10 ? '✓ In Stock (' + product.stock + ' available)' : product.stock > 0 ? '⚠ Low Stock (' + product.stock + ' left)' : '✗ Out of Stock'}
            </p>
            ${product.id !== 15 ? `
            <div class="quantity-selector">
                <button onclick="changeQty(-1)">−</button>
                <input type="number" id="qty" value="1" min="1" max="${product.stock}">
                <button onclick="changeQty(1)">+</button>
            </div>
            <div class="detail-actions">
                <button class="btn btn-primary" onclick="addDetailToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-secondary" onclick="addDetailAndBuy(${product.id})">Buy Now</button>
            </div>
            ` : `
            <p style="margin-top:20px;padding:15px;background:rgba(255,111,0,0.15);border-radius:8px;color:var(--accent);font-weight:600;">📞 Contact us to book this service</p>
            `}
        </div>
    `;
}

function changeQty(delta) {
    const input = document.getElementById('qty');
    const newVal = parseInt(input.value) + delta;
    if (newVal >= 1 && newVal <= parseInt(input.max)) {
        input.value = newVal;
    }
}

function addDetailToCart(id) {
    const qty = parseInt(document.getElementById('qty').value);
    addToCart(id, qty);
}

function addDetailAndBuy(id) {
    const qty = parseInt(document.getElementById('qty').value);
    addToCart(id, qty);
    window.location.href = 'cart.html';
}

function loadCartPage() {
    renderCart();
}

function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Browse our CCTV products and add items to your cart</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        summary.style.display = 'none';
        return;
    }

    summary.style.display = 'block';

    container.innerHTML = cart.map(item => {
        const imgSrc = item.image || 'images/cctv-dome.jpg';
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${imgSrc}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Category: ${item.category}</p>
                </div>
                <div class="cart-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
                <div class="quantity-selector" style="margin:0;">
                    <button onclick="updateCartItem(${item.id}, ${item.quantity - 1})">−</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateCartItem(${item.id}, parseInt(this.value))" style="width:50px;">
                    <button onclick="updateCartItem(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeCartItem(${item.id})">✕</button>
            </div>
        `;
    }).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 10000 ? 0 : 500;
    const total = subtotal + shipping;

    document.getElementById('cart-subtotal').textContent = 'Rs. ' + subtotal.toLocaleString();
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'FREE' : 'Rs. ' + shipping.toLocaleString();
    document.getElementById('cart-total').textContent = 'Rs. ' + total.toLocaleString();
}

function updateCartItem(id, qty) {
    if (qty <= 0) {
        removeFromCart(id);
    } else {
        updateCartQuantity(id, qty);
    }
    renderCart();
}

function removeCartItem(id) {
    removeFromCart(id);
    renderCart();
    showToast('Item removed from cart');
}

function loadCheckoutPage() {
    const cart = getCart();
    const orderItems = document.getElementById('order-items');

    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <div>
                <div class="name">${item.name}</div>
                <div class="qty">Qty: ${item.quantity}</div>
            </div>
            <div style="font-weight:600;">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 10000 ? 0 : 500;
    const total = subtotal + shipping;

    document.getElementById('order-subtotal').textContent = 'Rs. ' + subtotal.toLocaleString();
    document.getElementById('order-shipping').textContent = shipping === 0 ? 'FREE' : 'Rs. ' + shipping.toLocaleString();
    document.getElementById('order-total').textContent = 'Rs. ' + total.toLocaleString();

    document.querySelectorAll('.payment-method').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const form = e.target;
        const orderData = {
            name: form.fullName.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            city: form.city.value,
            district: form.district.value,
            paymentMethod: document.querySelector('.payment-method.active')?.dataset.method || 'cod'
        };

        const order = placeOrder(orderData);
        window.location.href = 'success.html?id=' + order.id;
    });
}
