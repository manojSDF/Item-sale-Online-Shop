const defaultProducts = [
    {
        id: 1,
        name: "Hikvision 4 Channel DVR",
        category: "dvr",
        brand: "Hikvision",
        price: 15750,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.5,
        reviews: 85,
        image: "images/prod-01.jpg",
        description: "Hikvision 4 Channel DVR with H.265+ compression, remote access via mobile app, HDMI/VGA output. Supports all Hikvision camera models.",
        specs: {
            "Channels": "4",
            "Brand": "Hikvision",
            "Compression": "H.265+",
            "Output": "HDMI / VGA",
            "Storage": "1 SATA HDD (up to 6TB)",
            "Warranty": "2 Years"
        },
        stock: 25,
        active: true
    },
    {
        id: 2,
        name: "2MP Smart Hybrid Light Fixed Mini Bullet Camera DS-2CE16D0T-EXLPF",
        category: "bullet",
        brand: "Hikvision",
        price: 7850,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.6,
        reviews: 62,
        image: "images/prod-02.webp",
        description: "Hikvision 3MP Dual Light Color Night Vision camera. Provides full color video even in complete darkness with built-in warm light and IR.",
        specs: {
            "Resolution": "3MP (2304x1296)",
            "Night Vision": "Dual Light (IR + Warm Light)",
            "Brand": "Hikvision",
            "Weatherproof": "IP67",
            "Power": "12V DC / PoE",
            "Warranty": "2 Years"
        },
        stock: 40,
        active: true
    },
    {
        id: 3,
        name: "Hikvision 2MP Dual Light Color with Audio DS-2CE16D0T-LPFS",
        category: "bullet",
        brand: "Hikvision",
        price: 7950,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.6,
        reviews: 48,
        image: "images/prod-03.png",
        description: "Hikvision 2MP Dual Light Color camera with built-in microphone for audio recording. Full color night vision with smart dual illumination.",
        specs: {
            "Resolution": "3MP+",
            "Night Vision": "Dual Light Color",
            "Audio": "Built-in Microphone",
            "Brand": "Hikvision",
            "Weatherproof": "IP67",
            "Warranty": "2 Years"
        },
        stock: 35,
        active: true
    },
    {
        id: 4,
        name: "ColorVu Hikvision 2MP Audio Fixed Mini Bullet Camera DS-2CE10DF0T-PFS",
        category: "bullet",
        brand: "Hikvision",
        price: 9850,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.7,
        reviews: 55,
        image: "images/prod-04.jpg",
        description: "Hikvision Full Time Color camera with 24/7 color recording and built-in audio. Advanced sensor technology for crystal clear images day and night.",
        specs: {
            "Resolution": "4MP+",
            "Night Vision": "Full Time Color 24/7",
            "Audio": "Built-in Microphone",
            "Brand": "Hikvision",
            "Weatherproof": "IP67",
            "Warranty": "2 Years"
        },
        stock: 30,
        active: true
    },
    {
        id: 5,
        name: "Bullet Camera Power Supply",
        category: "accessories",
        brand: "Generic",
        price: 780,
        oldPrice: null,
        badge: "",
        rating: 4.2,
        reviews: 120,
        image: "images/prod-05.jpg",
        description: "Power supply adapter for bullet cameras. 12V DC output with overload and short circuit protection.",
        specs: {
            "Input": "AC 110-240V",
            "Output": "DC 12V",
            "Type": "Bullet Camera Power",
            "Protection": "Overload / Short Circuit",
            "Cable Length": "Standard",
            "Warranty": "1 Year"
        },
        stock: 100,
        active: true
    },
    {
        id: 6,
        name: "Hikvision All Channel Support DVR 8 Channel",
        category: "dvr",
        brand: "Hikvision",
        price: 18250,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.7,
        reviews: 73,
        image: "images/prod-06.jpg",
        description: "Hikvision 8 Channel DVR supporting all camera types (TVI, AHD, CVI, CVBS). H.265+ compression, 4K HDMI output, remote access.",
        specs: {
            "Channels": "8",
            "Brand": "Hikvision",
            "Compatibility": "TVI / AHD / CVI / CVBS",
            "Compression": "H.265+",
            "Output": "4K HDMI / VGA",
            "Warranty": "2 Years"
        },
        stock: 20,
        active: true
    },
    {
        id: 7,
        name: "Dahua Cat 6 Full Copper Network Cable (1M)",
        category: "accessories",
        brand: "Dahua",
        price: 230,
        oldPrice: null,
        badge: "Per Meter",
        rating: 4.3,
        reviews: 200,
        image: "images/prod-07.webp",
        description: "Dahua Cat 6 Full Copper UTP network cable. High quality pure copper conductor for CCTV and network installations. Price per 1 meter.",
        specs: {
            "Type": "Cat 6 UTP",
            "Conductor": "Full Copper",
            "Brand": "Dahua",
            "Bandwidth": "250MHz",
            "Standard": "TIA/EIA-568",
            "Unit": "Per 1 Meter"
        },
        stock: 500,
        active: true
    },
    {
        id: 8,
        name: "TT Power Wire Full Copper (1M)",
        category: "accessories",
        brand: "Generic",
        price: 190,
        oldPrice: null,
        badge: "Per Meter",
        rating: 4.1,
        reviews: 180,
        image: "images/prod-08.jpg",
        description: "TT Power Wire Full Copper cable for CCTV camera power connections. Pure copper conductor ensures stable power delivery. Price: Rs. 190 per 1 Meter.",
        specs: {
            "Type": "Power Wire",
            "Conductor": "Full Copper",
            "Usage": "CCTV Camera Power",
            "Standard": "2-Core",
            "Quality": "Pure Copper",
            "Unit": "Per 1 Meter"
        },
        stock: 600,
        active: true
    },
    {
        id: 9,
        name: "Network Balun Connector",
        category: "accessories",
        brand: "Generic",
        price: 310,
        oldPrice: null,
        badge: "Pair",
        rating: 4.2,
        reviews: 150,
        image: "images/prod-09.jpg",
        description: "BNC Network Balun Connector for CCTV video transmission over Cat5/Cat6 cable. Transmits video signal up to 300m. Sold as a pair.",
        specs: {
            "Type": "BNC Balun",
            "Cable": "Cat5 / Cat6",
            "Range": "Up to 300m",
            "Connector": "BNC Male",
            "Quantity": "1 Pair",
            "Usage": "Video Transmission"
        },
        stock: 200,
        active: true
    },
    {
        id: 10,
        name: "18\" Used Lenovo Monitor",
        category: "monitors",
        brand: "Lenovo",
        price: 10000,
        oldPrice: 12000,
        badge: "Used",
        rating: 4.0,
        reviews: 35,
        image: "images/prod-10.webp",
        description: "18 inch used Lenovo LCD monitor in good working condition. Perfect for CCTV monitoring setup. VGA input supported.",
        specs: {
            "Size": "18 inches",
            "Brand": "Lenovo",
            "Condition": "Used - Good",
            "Input": "VGA",
            "Resolution": "1366x768",
            "Warranty": "30 Days"
        },
        stock: 8,
        active: true
    },
    {
        id: 11,
        name: "21\" Hikvision Brand New Monitor",
        category: "monitors",
        brand: "Hikvision",
        price: 24800,
        oldPrice: null,
        badge: "Brand New",
        rating: 4.8,
        reviews: 42,
        image: "images/prod-11.jpg",
        description: "21 inch Hikvision brand new CCTV monitoring display. Full HD resolution with HDMI/VGA input. Designed for 24/7 surveillance monitoring.",
        specs: {
            "Size": "21 inches",
            "Brand": "Hikvision",
            "Resolution": "1920x1080 Full HD",
            "Input": "HDMI / VGA",
            "Condition": "Brand New",
            "Warranty": "2 Years"
        },
        stock: 15,
        active: true
    },
    {
        id: 12,
        name: "DVR Mount Box",
        category: "accessories",
        brand: "Generic",
        price: 2450,
        oldPrice: null,
        badge: "",
        rating: 4.3,
        reviews: 90,
        image: "images/prod-12.webp",
        description: "Metal DVR mounting box for wall or rack installation. Protects your DVR unit with ventilation holes for cooling. Suitable for 4CH and 8CH DVRs.",
        specs: {
            "Material": "Metal",
            "Type": "Wall Mount",
            "Compatibility": "4CH / 8CH DVR",
            "Ventilation": "Built-in Holes",
            "Lock": "Key Lock",
            "Color": "Black"
        },
        stock: 40,
        active: true
    },
    {
        id: 13,
        name: "Wi-Fi EZVIZ Dual Lens 3MP 2K Camera",
        category: "dome",
        brand: "EZVIZ",
        price: 19900,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.7,
        reviews: 38,
        image: "images/prod-13.webp",
        description: "EZVIZ Wi-Fi dual lens 3MP 2K security camera. Dual lens provides wider coverage with pan-tilt functionality. Two-way audio and AI detection.",
        specs: {
            "Resolution": "3MP 2K",
            "Lens": "Dual Lens",
            "Brand": "EZVIZ",
            "Connectivity": "Wi-Fi",
            "Features": "AI Detection / Two-way Audio",
            "Warranty": "2 Years"
        },
        stock: 12,
        active: true
    },
    {
        id: 14,
        name: "Wi-Fi EZVIZ Single Lens 2K Camera",
        category: "dome",
        brand: "EZVIZ",
        price: 17500,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.6,
        reviews: 45,
        image: "images/prod-14.jpg",
        description: "EZVIZ Wi-Fi single lens 2K security camera. Compact design with night vision, motion detection, and smartphone app control.",
        specs: {
            "Resolution": "2K",
            "Lens": "Single Lens",
            "Brand": "EZVIZ",
            "Connectivity": "Wi-Fi",
            "Features": "Night Vision / Motion Detection",
            "Warranty": "2 Years"
        },
        stock: 18,
        active: true
    },
    {
        id: 15,
        name: "Camera Fix Service (Per Point)",
        category: "accessories",
        brand: "SecureVision",
        price: 3000,
        oldPrice: null,
        badge: "Service",
        rating: 4.8,
        reviews: 120,
        image: "images/prod-15.webp",
        description: "Professional CCTV camera installation service - Rs. 3,000 per 1 point. Price may change for distances over 100 meters from the DVR box.",
        specs: {
            "Service": "Camera Installation",
            "Base Price": "Rs. 3,000 per 1 Point",
            "Note": "Price changes after 100m from DVR box",
            "Warranty": "Included"
        },
        stock: 999,
        active: true
    },
    {
        id: 16,
        name: "500GB Surveillance Hard Drive",
        category: "accessories",
        brand: "Generic",
        price: 5300,
        oldPrice: null,
        badge: "2 Years Warranty",
        rating: 4.0,
        reviews: 0,
        image: "images/prod-16.webp",
        description: "500GB Surveillance Grade Hard Drive designed for 24/7 continuous recording in CCTV systems. Optimized for high write workloads and reliable performance.",
        specs: {
            "Capacity": "500GB",
            "Type": "Surveillance HDD",
            "Usage": "24/7 Recording",
            "Interface": "SATA",
            "Compatibility": "DVR / NVR",
            "Warranty": "2 Years"
        },
        stock: 30,
        active: true
    },
    {
        id: 17,
        name: "Micro SD Card 64GB",
        category: "accessories",
        brand: "Generic",
        price: 5200,
        oldPrice: null,
        badge: "1 Year Warranty",
        rating: 4.0,
        reviews: 0,
        image: "images/prod-17.jpg",
        description: "64GB Micro SD Card for CCTV cameras and DVR/NVR recording. High endurance and reliable storage for continuous surveillance use.",
        specs: {
            "Capacity": "64GB",
            "Type": "Micro SD Card",
            "Usage": "CCTV / DVR / NVR",
            "Speed Class": "Class 10",
            "Endurance": "High",
            "Warranty": "1 Year"
        },
        stock: 50,
        active: true
    },
    {
        id: 18,
        name: "Original Samsung 25W Power Adapter",
        category: "mobile-accessories",
        brand: "Samsung",
        price: 4500,
        oldPrice: null,
        badge: "6 Month Warranty",
        rating: 4.5,
        reviews: 0,
        image: "images/prod-18.webp",
        description: "Original Samsung 25W Super Fast Charging Power Adapter. Supports USB-C PD fast charging for Samsung Galaxy and other compatible devices.",
        specs: {
            "Brand": "Samsung",
            "Output": "25W Super Fast Charging",
            "Port": "USB-C",
            "Type": "Power Adapter",
            "Compatibility": "Samsung Galaxy / USB-C Devices",
            "Condition": "Brand New",
            "Warranty": "6 Month Warranty"
        },
        stock: 20,
        active: true
    },
    {
        id: 19,
        name: "Excellent Power Bank 20000MA",
        category: "mobile-accessories",
        brand: "Generic",
        price: 6000,
        oldPrice: null,
        badge: "6 Month Warranty",
        rating: 4.0,
        reviews: 0,
        image: "images/prod-19.webp",
        description: "Excellent 20000mAh Power Bank with dual USB output. High capacity portable charger for smartphones, tablets, and other devices.",
        specs: {
            "Capacity": "20000mAh",
            "Output": "Dual USB",
            "Type": "Power Bank",
            "Compatibility": "All Smartphones & Tablets",
            "Condition": "Brand New",
            "Warranty": "6 Month Warranty"
        },
        stock: 25,
        active: true
    },
    {
        id: 20,
        name: "Hikvision 8-Port Gigabit Switch",
        category: "accessories",
        brand: "Hikvision",
        price: 11900,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.5,
        reviews: 0,
        image: "images/prod-20.jpg",
        description: "Hikvision 8-Port Gigabit Switch for high-speed network connectivity in CCTV systems. Supports 10/100/1000 Mbps transfer rates for reliable data transmission.",
        specs: {
            "Brand": "Hikvision",
            "Ports": "8",
            "Speed": "10/100/1000 Mbps",
            "Type": "Gigabit Switch",
            "Usage": "CCTV / Network",
            "Warranty": "2 Year Warranty"
        },
        stock: 15,
        active: true
    },
    {
        id: 21,
        name: "Hikvision DS-7604NI-Q1 4-Channel 4K NVR",
        category: "nvr",
        brand: "Hikvision",
        price: 28900,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.5,
        reviews: 0,
        image: "images/prod-21.jpg",
        description: "Hikvision DS-7604NI-Q1 4-Channel 4K NVR with H.265+ compression, up to 4K resolution support, HDMI output, and remote access via Hik-Connect app.",
        specs: {
            "Model": "DS-7604NI-Q1",
            "Channels": "4",
            "Resolution": "Up to 4K",
            "Compression": "H.265+",
            "Output": "HDMI",
            "Remote Access": "Hik-Connect",
            "Warranty": "2 Year Warranty"
        },
        stock: 10,
        active: true
    },
    {
        id: 22,
        name: "Hikvision DS-7604NI-Q1/4P 4-Channel NVR with 4 PoE Ports",
        category: "nvr",
        brand: "Hikvision",
        price: 46500,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.5,
        reviews: 0,
        image: "images/prod-22.webp",
        description: "Hikvision DS-7604NI-Q1/4P 4-Channel NVR with 4 built-in PoE ports. Supports up to 4K resolution, H.265+ compression, and PoE plug-and-play setup for easy camera installation.",
        specs: {
            "Model": "DS-7604NI-Q1/4P",
            "Channels": "4",
            "PoE Ports": "4",
            "Resolution": "Up to 4K",
            "Compression": "H.265+",
            "PoE": "Plug and Play",
            "Remote Access": "Hik-Connect",
            "Warranty": "2 Year Warranty"
        },
        stock: 10,
        active: true
    },
    {
        id: 23,
        name: "Hikvision DS-7608NI-Q1 8-Channel 4K NVR",
        category: "nvr",
        brand: "Hikvision",
        price: 43750,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.5,
        reviews: 0,
        image: "images/prod-23.jpg",
        description: "Hikvision DS-7608NI-Q1 8-Channel 4K NVR with H.265+ compression, supports up to 4K ultra HD resolution, HDMI output, and remote access via Hik-Connect app.",
        specs: {
            "Model": "DS-7608NI-Q1",
            "Channels": "8",
            "Resolution": "Up to 4K",
            "Compression": "H.265+",
            "Output": "HDMI",
            "Remote Access": "Hik-Connect",
            "Warranty": "2 Year Warranty"
        },
        stock: 10,
        active: true
    },
    {
        id: 24,
        name: "Hikvision DS-7608NXI-K2 8-Channel 2-HDD AI NVR",
        category: "nvr",
        brand: "Hikvision",
        price: 57200,
        oldPrice: null,
        badge: "2 Year Warranty",
        rating: 4.5,
        reviews: 0,
        image: "images/prod-24.webp",
        description: "Hikvision DS-7608NXI-K2 8-Channel AI NVR with 2 HDD slots, deep learning AI features, H.265+ compression, up to 4K resolution, and advanced face/motion detection.",
        specs: {
            "Model": "DS-7608NXI-K2",
            "Channels": "8",
            "HDD Slots": "2",
            "AI": "Deep Learning",
            "Resolution": "Up to 4K",
            "Compression": "H.265+",
            "Detection": "Face / Motion",
            "Warranty": "2 Year Warranty"
        },
        stock: 10,
        active: true
    }
];

const DATA_VERSION = 25;

function getProducts() {
    const storedVersion = localStorage.getItem('cctv_version');
    const stored = localStorage.getItem('cctv_products');

    if (stored && storedVersion == DATA_VERSION) {
        return JSON.parse(stored);
    }

    localStorage.setItem('cctv_products', JSON.stringify(defaultProducts));
    localStorage.setItem('cctv_version', DATA_VERSION);
    return defaultProducts;
}

function saveProducts(products) {
    localStorage.setItem('cctv_products', JSON.stringify(products));
}

function getCart() {
    const stored = localStorage.getItem('cctv_cart');
    return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
    localStorage.setItem('cctv_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

function addToCart(productId, quantity = 1) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: quantity
        });
    }

    saveCart(cart);
    showToast('Product added to cart!');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart(cart);
        }
    }
}

function showToast(message, isError = false) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'toast' + (isError ? ' error' : '');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function getOrders() {
    const stored = localStorage.getItem('cctv_orders');
    return stored ? JSON.parse(stored) : [];
}

function saveOrders(orders) {
    localStorage.setItem('cctv_orders', JSON.stringify(orders));
}

function placeOrder(orderData) {
    const orders = getOrders();
    const cart = getCart();
    const products = getProducts();

    const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toISOString(),
        items: cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return { ...item, image: product ? product.image : '' };
        }),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        ...orderData,
        status: 'Processing'
    };

    orders.push(order);
    saveOrders(orders);

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) product.stock -= item.quantity;
    });
    saveProducts(products);

    saveCart([]);
    return order;
}
