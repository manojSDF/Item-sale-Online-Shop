document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
    setupSidebar();
    setupModal();
});

let editingProductId = null;

function setupSidebar() {
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const section = this.dataset.section;
            if (section === 'products') loadProductsTable();
            else if (section === 'dashboard') loadDashboard();
            else if (section === 'orders') loadOrders();
        });
    });
}

// ============ DASHBOARD ============

function loadDashboard() {
    showSection('dashboard');
    const products = getProducts();
    const orders = getOrders();
    const cart = getCart();

    const totalProducts = products.length;
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    const lowStock = products.filter(p => p.stock < 15).length;

    document.getElementById('stat-products').textContent = totalProducts;
    document.getElementById('stat-orders').textContent = totalOrders;
    document.getElementById('stat-revenue').textContent = 'Rs. ' + totalRevenue.toLocaleString();
    document.getElementById('stat-lowstock').textContent = lowStock;
}

// ============ PRODUCTS TABLE ============

function loadProductsTable() {
    showSection('products');
    const products = getProducts();
    renderProductsTable(products);

    const searchInput = document.getElementById('admin-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
            renderProductsTable(filtered);
        });
    }
}

function renderProductsTable(products) {
    const tbody = document.getElementById('products-tbody');
    if (!tbody) return;

    tbody.innerHTML = products.map(p => `
        <tr>
            <td><div class="product-cell"><div class="product-thumb">${p.icon}</div><span>${p.id}</span></div></td>
            <td><div class="product-cell"><div class="product-thumb">${p.icon}</div><div><strong>${p.name}</strong><br><small style="color:var(--gray)">${p.brand}</small></div></div></td>
            <td>${p.category}</td>
            <td>Rs. ${p.price.toLocaleString()}</td>
            <td>${p.stock}</td>
            <td><span class="badge ${p.active ? 'badge-active' : 'badge-inactive'}">${p.active ? 'Active' : 'Inactive'}</span></td>
            <td>
                <div class="actions-cell">
                    <button class="btn-edit" onclick="editProduct(${p.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteProduct(${p.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ============ ORDERS ============

function loadOrders() {
    showSection('orders');
    const orders = getOrders();
    const tbody = document.getElementById('orders-tbody');
    if (!tbody) return;

    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--gray);">No orders yet</td></tr>';
        return;
    }

    tbody.innerHTML = orders.map(o => `
        <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.name}<br><small style="color:var(--gray)">${o.email}</small></td>
            <td>${o.items.length} item(s)</td>
            <td>Rs. ${o.total.toLocaleString()}</td>
            <td><span class="badge badge-active">${o.status}</span></td>
            <td>${new Date(o.date).toLocaleDateString()}</td>
        </tr>
    `).join('');
}

// ============ MODAL / CRUD ============

function setupModal() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');
    const cancelBtn = document.getElementById('modal-cancel');
    const form = document.getElementById('product-form');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeModal();
    });

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            saveProduct();
        });
    }
}

function openModal() {
    document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    editingProductId = null;
    document.getElementById('product-form').reset();
    document.getElementById('modal-title').textContent = 'Add New Product';
}

function addProduct() {
    editingProductId = null;
    document.getElementById('modal-title').textContent = 'Add New Product';
    document.getElementById('product-form').reset();
    openModal();
}

function editProduct(id) {
    const products = getProducts();
    const product = products.find(p => p.id === id);
    if (!product) return;

    editingProductId = id;
    document.getElementById('modal-title').textContent = 'Edit Product';

    const form = document.getElementById('product-form');
    form.name.value = product.name;
    form.brand.value = product.brand;
    form.category.value = product.category;
    form.price.value = product.price;
    form.oldPrice.value = product.oldPrice || '';
    form.stock.value = product.stock;
    form.icon.value = product.icon;
    form.description.value = product.description;
    form.badge.value = product.badge || '';
    form.active.checked = product.active;

    // Fill specs
    const specs = product.specs;
    const specKeys = Object.keys(specs);
    form.specKey1.value = specKeys[0] || '';
    form.specVal1.value = specs[specKeys[0]] || '';
    form.specKey2.value = specKeys[1] || '';
    form.specVal2.value = specs[specKeys[1]] || '';
    form.specKey3.value = specKeys[2] || '';
    form.specVal3.value = specs[specKeys[2]] || '';
    form.specKey4.value = specKeys[3] || '';
    form.specVal4.value = specs[specKeys[3]] || '';
    form.specKey5.value = specKeys[4] || '';
    form.specVal5.value = specs[specKeys[4]] || '';
    form.specKey6.value = specKeys[5] || '';
    form.specVal6.value = specs[specKeys[5]] || '';

    openModal();
}

function saveProduct() {
    const form = document.getElementById('product-form');
    const products = getProducts();

    const specs = {};
    for (let i = 1; i <= 6; i++) {
        const key = form.elements['specKey' + i].value.trim();
        const val = form.elements['specVal' + i].value.trim();
        if (key && val) specs[key] = val;
    }

    const productData = {
        name: form.name.value,
        brand: form.brand.value,
        category: form.category.value,
        price: parseInt(form.price.value),
        oldPrice: form.oldPrice.value ? parseInt(form.oldPrice.value) : null,
        stock: parseInt(form.stock.value),
        icon: form.icon.value || '📦',
        description: form.description.value,
        badge: form.badge.value,
        active: form.active.checked,
        specs: specs,
        rating: 4.0,
        reviews: 0
    };

    if (editingProductId) {
        const index = products.findIndex(p => p.id === editingProductId);
        if (index !== -1) {
            productData.id = editingProductId;
            productData.rating = products[index].rating;
            productData.reviews = products[index].reviews;
            products[index] = productData;
        }
    } else {
        productData.id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push(productData);
    }

    saveProducts(products);
    closeModal();
    loadProductsTable();
    showToast(editingProductId ? 'Product updated!' : 'Product added!');
}

function deleteProduct(id) {
    if (!confirm('Are you sure you want to delete this product?')) return;

    let products = getProducts();
    products = products.filter(p => p.id !== id);
    saveProducts(products);
    loadProductsTable();
    showToast('Product deleted!');
}

// ============ HELPERS ============

function showSection(section) {
    document.querySelectorAll('.admin-section').forEach(el => el.style.display = 'none');
    const target = document.getElementById('section-' + section);
    if (target) target.style.display = 'block';
}
