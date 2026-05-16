let activeCategory = "all";
let searchQuery = "";
let cart = [];

function getProductImg(product) {
    // product images from free stock photos
    const imgList = {
        'Air Zoom Pulse': 'https://media.about.nike.com/img/daf54e8a-b8c6-4a99-bc0c-3816f058a615/nike-air-zoom-pulse-2-91660.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjAsIndpZHRoIjoxNjAwLCJoZWlnaHQiOjEwNjd9LCJyZXNpemUiOnsid2lkdGgiOjM4NDB9fX0%3D&s=1da56629f77b9a565dbd704c2830203d82154b082c9f7b9bb07fedab2af52712',
        'Trail Runners GTX': 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR__Za8vAOn1LOylr0-hr-ZNlm4r7ONZRUvKKfxesvkhgZEtjpwJ9tW3rx_5vthDwWGH7hwdNcTkCpQdBVtSwGrhswto8VoIH3HgrSitBPZb33Fs_cKrKA1EXH78cLcTn_k5oAEqBChfQ&usqp=CAc',
        'Urban Slip-Ons': 'https://rukminim2.flixcart.com/image/1280/1280/xif0q/shoe/t/1/m/-original-imahd2zh5fb4qqym.jpeg?q=90',
        'Retro Court Sneakers': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/b/d/j/8-fi-844-8-zixer-black-original-imahgrxdryuzmugx.jpeg?q=90',
        'Cloudfoam Runners': 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTUUVl8cBfvoB4ken6yukVLb9plj417VKXP2yvDpTptcnZG1QZlrSg98ebA5s0JolFB66ABEBIrInaMZHOqsFgjLloUfQp8aFtVIXErKAbGPNAM7bGx6iAeWJlnwgW3FbcYQt8PBQ&usqp=CAc',
        'Leather Chelsea Boots': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/0/l/4/8-krt2542-8-0-kriton-black-original-imahfwx8hzfwpg2z.jpeg?q=90',
        'Mesh Training Shoes': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/s/v/m/-original-imahf8kjr7q4gqka.jpeg?q=90',
        'Minimalist Loafers': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/d/b/2/6-nl-grey-fitman-40-bruton-grey-original-imah9hpjxagefcpf.jpeg?q=90',
      'High-Top Platforms': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/s/w/7/-original-imahg2fr9r2gekv9.jpeg?q=90',
     'Winter Wool Sneaks': 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVLkwCvya6yWFqAc0fjkrFdVxXtcRzNqlbdiguolEWqdArEP1o3W3sjVOL3ystsnlz2VPVw-B4SI_iYXLRr8lPWQs-isNtrlx-PRUMHjFTbEyyZWVZIEgGN3M3YjaOfZM4KxzL9-I&usqp=CAc',
     'Slip-Resistant Work': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/j/d/6/6-2952blk-6-leo-s-fitness-shoes-black-original-imahbqsjrzgx3fzg.jpeg?q=90',
      'Eco Knit Runners': 'https://m.media-amazon.com/images/I/819iMA4Y5EL._AC_UY1000_.jpg',
'Monochrome Skate': 'https://m.media-amazon.com/images/I/81I81m4h+EL._SL1500_.jpg',
'Gore-Tex Hiking Boots': 'https://m.media-amazon.com/images/I/61c2el7lrcL._SY695_.jpg',
'Espadrille Summer': 'https://m.media-amazon.com/images/I/71G4DE39x6L._SY695_.jpg',
'Vintage Oxfords': 'https://m.media-amazon.com/images/I/61CLFQf6RkL._SY695_.jpg',
'StreetStyle High Top': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/o/x/3/-original-imagg3agqz2b4kkq.jpeg?q=90',
//  Clothing 

'Organic Cotton Tee': 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSURtJePJnrIekDKPooSLV2w8v13-ohrOy2ALoILQMUPKQb2AYWsu6C8_iSV31FVycXYV2D-1Av3wjr2rIPyqZM-Qwh91xE7GBgTb0yissn2BZCyGUx0K8oow4vOdCam6pdqo5K58gj&usqp=CAc',
'Slim Fit Jeans': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/jean/l/n/r/30-fous-003-foustreeg-original-imahm6qjbpyrfmgz.jpeg?q=90',
'Merino Wool Sweater': 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSc9ZbqfnbztsWFWV_eAcygPbYQMDtzM9Azd8FWwDt6IhownELYNzwnSh-mCYDjZKuMBOMRHfP8FOxWzrgIADIRq-Hufy3zMcqAe5IUPVVGIyYvJZTeyiJabR3tCA1wIIhuESnhgsuk&usqp=CAc',
'Performance Hoodie': 'https://m.media-amazon.com/images/I/71GaH2nLQ6L._SY879_.jpg',
'Linen Summer Shirt': 'https://m.media-amazon.com/images/I/71ShBw4g6GL._SX679_.jpg',
'Cargo Joggers': 'https://m.media-amazon.com/images/I/61kjvN8OtvL._SY879_.jpg',
'Denim Jacket Vintage': 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4kV0bgEXEsVQE3vmJ8MkKL2PYZcFvE6RMShV1B3a720InEjWxHxXudjgcs7WVIXGErwOyCBnZysu7B7311GHVpneqVQQrO3mJcjKdHAd32EhxVGfziBbC1xKuhhRrM5b8CY_pbQ&usqp=CAc',

//Electronics
'SonicPro Headphone': 'https://m.media-amazon.com/images/I/61jUhCaD2SL._AC_UY327_FMwebp_QL65_.jpg',
'Smart Watch Elite': 'https://m.media-amazon.com/images/I/61-UCiTzolL._AC_UY327_FMwebp_QL65_.jpg',
'Noise Cancelling Headphones': 'https://m.media-amazon.com/images/I/51vbNaqQxmL._AC_UY327_FMwebp_QL65_.jpg',
'Wireless Earbuds Pro': 'https://m.media-amazon.com/images/I/51SHUxXMPuL._AC_UY327_FMwebp_QL65_.jpg',
'Smart Speaker Mini': 'https://m.media-amazon.com/images/I/41tmsJRz5hL._AC_UY327_FMwebp_QL65_.jpg',
'Mechanical RGB Keyboard': 'https://m.media-amazon.com/images/I/81JG5E6nJXL._AC_UY327_FMwebp_QL65_.jpg',
'Fitness Tracker Band': 'https://m.media-amazon.com/images/I/41abF4vT-OL._SL1000_.jpg',

//Accessories
'Minimalist Watch': 'https://m.media-amazon.com/images/I/71yfA9w-GqL._SX679_.jpg',
'Leather Backpack': 'https://m.media-amazon.com/images/I/914FTbKqluL._SY879_.jpg',
'Aviator Sunglasses': 'https://m.media-amazon.com/images/I/61wFcIclLxL._SX679_.jpg',
'Smart Band Pro': 'https://m.media-amazon.com/images/I/418RlYE+wfL._SY300_SX300_QL70_FMwebp_.jpg',



};
    // Return image if we have it otherwise a default pic
    return imgList[product.name] || 'https://static.vecteezy.com/system/resources/thumbnails/023/103/916/small_2x/not-available-rubber-stamp-seal-vector.jpg';

    }

function formatIndianPrice(price) {
    return new Intl.NumberFormat('en-IN').format(price);
}
// Ye indian format mai number show karta 

function getFilteredProducts() {     // ye product ko filter karta hai based on category or search text
    let filtered = [...productDatabase];  //Saare product ki copy 
    if (activeCategory !== "all") {        // Ager user ne koi specific category choose ki like shoes to sirf wahi product aayenge
        filtered = filtered.filter(p => p.category === activeCategory);    
    }
    if (searchQuery.trim() !== "") {
        let q = searchQuery.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q));   // jo user search karega wahi product aayenge
    }
    return filtered;
}

function updateCartUI() {   // This is improtant one Cart items show karna , Total price calculate karna or quantity badge update karna
    let cartContainer = document.getElementById('cartItemsList');
    let totalSpan = document.getElementById('cartTotalPrice');
    let badge = document.getElementById('cartCountBadge');
    
    if (!badge) return;
    
    let totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);    //Ye cart ki total quantity nikal raha hai
    badge.innerText = totalQty;
    
    if (cart.length === 0) {      //Ager cart empty hai to empty show karna 
        if (cartContainer) cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        if (totalSpan) totalSpan.innerText = '₹0';
        return;
    }
    
    let total = 0;
    if (cartContainer) {
        cartContainer.innerHTML = cart.map(item => {               
  let itemTotal = item.price * item.quantity;
total += itemTotal;
return `
<div class="cart-item">
 <div class="cart-item-info">
 <div class="cart-item-title">${item.name}</div>
 <div class="cart-item-price">₹${formatIndianPrice(item.price)}</div> </div>
<div class="cart-item-actions">
<button class="cart-qty-down" data-id="${item.id}">-</button>
 <span>${item.quantity}</span>
<button class="cart-qty-up" data-id="${item.id}">+</button>   // ye quantity increase decrease karta hai
 <button class="cart-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>  
</div></div>`;
}).join('');
    }
 if (totalSpan) totalSpan.innerText = `₹${formatIndianPrice(total)}`;
    
    // Attach events
    document.querySelectorAll('.cart-qty-up').forEach(btn => {
        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id), 1));  
    });
    document.querySelectorAll('.cart-qty-down').forEach(btn => {
        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id), -1));
    });
    document.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
}

function addToCart(productId, delta = 1) {  //Cart mai item add remove karna
    let product = productDatabase.find(p => p.id === productId); //Database mai product search karna
    if (!product) return;
    
    let existing = cart.find(item => item.id === productId); //Product already cart mai hai ya nahi
    
    if (existing) {
        let newQty = existing.quantity + delta;  //Already hai to quantity badhana
        if (newQty <= 0) {  //Ager quantity zero ho gayi cart se remove kar do
            cart = cart.filter(item => item.id !== productId);
        } else {
            existing.quantity = newQty;
        }
    } else if (delta > 0) {
        cart.push({ 
 id: product.id, 
 name: product.name, 
 price: product.price, 
quantity: 1 
});
}
updateCartUI();
    let msg = delta > 0 ? `🛒 ${product.name} added` : `🗑️ ${product.name} removed`;
showToast(msg);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast(`Item removed from cart`);
}

function showToast(msg) {  
    let toast = document.getElementById('globalToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function renderProducts(containerId = 'productGrid') { //Products ko page per display karna 
let filtered = getFilteredProducts();
let countDisplay = document.getElementById('productCountDisplay');
 if (countDisplay) {
countDisplay.innerText = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
}
let grid = document.getElementById(containerId);
if (!grid) return;
if (filtered.length === 0) {
grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px;">No products found 😕</div>`;
return;
}
grid.innerHTML = filtered.map(prod => {
let imgUrl = getProductImg(prod);
return `
<div class="product-card" onclick="window.location.href='product-detail.html?id=${prod.id}'">
 <div class="product-img">
<img src="${imgUrl}" alt="${prod.name}" style="width:100%; height:180px; object-fit:cover;"></div>
<div class="product-info">
<div class="product-title">${prod.name}</div>
  <div class="price">₹${formatIndianPrice(prod.price)}</div>
 <button class="add-to-cart-btn" data-id="${prod.id}">
  <i class="fas fa-shopping-cart"></i> Add To Cart
 </button>
</div>
</div>
 `;
    }).join('');
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
   e.stopPropagation();
     addToCart(parseInt(btn.dataset.id), 1);
    });
  });
}

function renderCategoryTabs() {
    let categories = [
  { key: "all", label: "All", icon: "fa-th-large" },
{ key: "shoes", label: "Shoes", icon: "fa-shoe-prints" },
    { key: "clothing", label: "Clothing", icon: "fa-tshirt" },
{ key: "electronics", label: "Electronics", icon: "fa-microchip" },
    { key: "accessories", label: "Accessories", icon: "fa-gem" }
 ];
 let container = document.getElementById('categoryTabsList');
 if (!container) return;
container.innerHTML = categories.map(cat => `
  <div class="cat-pill ${activeCategory === cat.key ? 'active' : ''}" data-cat="${cat.key}">
 <i class="fas ${cat.icon}"></i> ${cat.label}
 </div>
 `).join('');
 document.querySelectorAll('.cat-pill').forEach(pill => {
  pill.addEventListener('click', () => {
            activeCategory = pill.dataset.cat;
            renderCategoryTabs();
            renderProducts();
        });
    });
}

function renderFeaturedProducts() {
    let featured = [...productDatabase].slice(0, 8); let grid = document.getElementById('featuredGrid');
 if (!grid) return;
    
    grid.innerHTML = featured.map(prod => {
 let imgUrl = getProductImg(prod);
   return `
<div class="product-card" onclick="window.location.href='product-detail.html?id=${prod.id}'">
<div class="product-img">
 <img src="${imgUrl}" alt="${prod.name}" style="width:100%; height:180px; object-fit:cover;">
  </div>
    <div class="product-info">
<div class="product-title">${prod.name}</div>
 <div class="price">₹${formatIndianPrice(prod.price)}</div>
  <button class="add-to-cart-btn" data-id="${prod.id}">
  <i class="fas fa-shopping-cart"></i> Add To Cart 
</button>
 </div>
 </div>
        `;
    }).join('');
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn =>{ 
        btn.addEventListener('click', (e) => {
   e.stopPropagation();
  addToCart(parseInt(btn.dataset.id), 1);
});
 });
}

function initCartSidebar() {
    let cartIcon = document.getElementById('cartIcon');
    let sidebar = document.getElementById('cartSidebar');
    let overlay = document.getElementById('cartOverlay');
    let closeBtn = document.getElementById('closeCartBtn');
    let checkoutBtn = document.getElementById('checkoutBtn');
    
    if (!cartIcon) return;
    
    function openCart() { 
        if (sidebar) sidebar.classList.add('open'); 
        if (overlay) overlay.classList.add('show-overlay'); 
    }
    
    function closeCart() { 
        if (sidebar) sidebar.classList.remove('open'); 
        if (overlay) overlay.classList.remove('show-overlay'); 
    }
    
    cartIcon.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Cart is empty');
     return;
  }
     let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Thanks for shopping! Total: ₹${formatIndianPrice(total)}`);
        cart = [];
       updateCartUI();
 closeCart();
   showToast('Order placed!😁');
        });
    }
}

function initSearch() {
 let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchButton');
   if (!searchInput || !searchBtn) return;
let performSearch = () => { 
        searchQuery = searchInput.value; 
        renderProducts(); 
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => { 
        if (e.key === 'Enter') performSearch(); 
    });
}

function loadCart() {
let saved = localStorage.getItem('mycart_data');
 if (saved) {
cart = JSON.parse(saved);
updateCartUI();
 }
}

function saveCart() {
localStorage.setItem('mycart_data', JSON.stringify(cart));
}

window.addEventListener('beforeunload', saveCart);

function init() {
    loadCart();
    initCartSidebar();
    
    if (document.getElementById('categoryTabsList')) {
        renderCategoryTabs();
        renderProducts();
        initSearch();
    }
    
    if (document.getElementById('featuredGrid')) {
        renderFeaturedProducts();
    }
    
    updateCartUI();
}

init();