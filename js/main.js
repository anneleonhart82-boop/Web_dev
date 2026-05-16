let activeCategory = "all";
let searchQuery = "";
let cart = [];
function getProductImg(product) {
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
  'Organic Cotton Tee': 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSURtJePJnrIekDKPooSLV2w8v13-ohrOy2ALoILQMUPKQb2AYWsu6C8_iSV31FVycXYV2D-1Av3wjr2rIPyqZM-Qwh91xE7GBgTb0yissn2BZCyGUx0K8oow4vOdCam6pdqo5K58gj&usqp=CAc',
        'Slim Fit Jeans': 'https://rukminim1.flixcart.com/image/1280/1280/xif0q/jean/l/n/r/30-fous-003-foustreeg-original-imahm6qjbpyrfmgz.jpeg?q=90',
        'Merino Wool Sweater': 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSc9ZbqfnbztsWFWV_eAcygPbYQMDtzM9Azd8FWwDt6IhownELYNzwnSh-mCYDjZKuMBOMRHfP8FOxWzrgIADIRq-Hufy3zMcqAe5IUPVVGIyYvJZTeyiJabR3tCA1wIIhuESnhgsuk&usqp=CAc',
  'Performance Hoodie': 'https://m.media-amazon.com/images/I/71GaH2nLQ6L._SY879_.jpg',
'Linen Summer Shirt': 'https://m.media-amazon.com/images/I/71ShBw4g6GL._SX679_.jpg',
 'Cargo Joggers': 'https://m.media-amazon.com/images/I/61kjvN8OtvL._SY879_.jpg',
 'Denim Jacket Vintage': 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4kV0bgEXEsVQE3vmJ8MkKL2PYZcFvE6RMShV1B3a720InEjWxHxXudjgcs7WVIXGErwOyCBnZysu7B7311GHVpneqVQQrO3mJcjKdHAd32EhxVGfziBbC1xKuhhRrM5b8CY_pbQ&usqp=CAc',
  'SonicPro Headphone': 'https://m.media-amazon.com/images/I/61jUhCaD2SL._AC_UY327_FMwebp_QL65_.jpg',
 'Smart Watch Elite': 'https://m.media-amazon.com/images/I/61-UCiTzolL._AC_UY327_FMwebp_QL65_.jpg',
'Noise Cancelling Headphones': 'https://m.media-amazon.com/images/I/51vbNaqQxmL._AC_UY327_FMwebp_QL65_.jpg',
  'Wireless Earbuds Pro': 'https://m.media-amazon.com/images/I/51SHUxXMPuL._AC_UY327_FMwebp_QL65_.jpg',
        'Smart Speaker Mini': 'https://m.media-amazon.com/images/I/41tmsJRz5hL._AC_UY327_FMwebp_QL65_.jpg',
'Mechanical RGB Keyboard': 'https://m.media-amazon.com/images/I/81JG5E6nJXL._AC_UY327_FMwebp_QL65_.jpg',
        'Fitness Tracker Band': 'https://m.media-amazon.com/images/I/41abF4vT-OL._SL1000_.jpg',
  'Minimalist Watch': 'https://m.media-amazon.com/images/I/71yfA9w-GqL._SX679_.jpg',
        'Leather Backpack': 'https://m.media-amazon.com/images/I/914FTbKqluL._SY879_.jpg',
  'Aviator Sunglasses': 'https://m.media-amazon.com/images/I/61wFcIclLxL._SX679_.jpg',
 'Smart Band Pro': 'https://m.media-amazon.com/images/I/418RlYE+wfL._SY300_SX300_QL70_FMwebp_.jpg',
    };
    
    if (imgList[product.name]) {
        return imgList[product.name];
    } else {
        return 'https://static.vecteezy.com/system/resources/thumbnails/023/103/916/small_2x/not-available-rubber-stamp-seal-vector.jpg';
    }
}
function formatIndianPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getFilteredProducts() {
    let filtered = [...productDatabase];
  if (activeCategory !== "all") {
        filtered = filtered.filter(function(p) {
            return p.category === activeCategory;
        });
    }
if (searchQuery !== "") {
        let q = searchQuery.toLowerCase();
        filtered = filtered.filter(function(p) {
            return p.name.toLowerCase().indexOf(q) !== -1;
        });
    }
    
    return filtered;
}
function updateCartUI() {
    let cartContainer = document.getElementById('cartItemsList');
    let totalSpan = document.getElementById('cartTotalPrice');
    let badge = document.getElementById('cartCountBadge');
        let totalQty = 0;
    for (let i = 0; i < cart.length; i++) {
        totalQty = totalQty + cart[i].quantity;
    }
    if (badge) {
        badge.innerText = totalQty;
    }
        if (cart.length === 0) {
        if (cartContainer) {
            cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        }
        if (totalSpan) {
            totalSpan.innerText = '₹0';
        }
        return;
    }
let total = 0;
    let cartHTML = '';
    
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemTotal = item.price * item.quantity;
        total = total + itemTotal;
        
        cartHTML = cartHTML + `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${formatIndianPrice(item.price)}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-qty-down" data-id="${item.id}">-</button>
    <span>${item.quantity}</span>
  <button class="cart-qty-up" data-id="${item.id}">+</button>
                    <button class="cart-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `;
    }
    
    if (cartContainer) {
        cartContainer.innerHTML = cartHTML;
    }
    if (totalSpan) {
        totalSpan.innerText = '₹' + formatIndianPrice(total);
    }
 let upButtons = document.querySelectorAll('.cart-qty-up');
    for (let i = 0; i < upButtons.length; i++) {
        upButtons[i].addEventListener('click', function(e) {
            let id = parseInt(this.getAttribute('data-id'));
            addToCart(id, 1);
        });
    }
    
    let downButtons = document.querySelectorAll('.cart-qty-down');
    for (let i = 0; i < downButtons.length; i++) {
        downButtons[i].addEventListener('click', function(e) {
            let id = parseInt(this.getAttribute('data-id'));
            addToCart(id, -1);
        });
    }
    
    let removeButtons = document.querySelectorAll('.cart-remove');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function(e) {
            let id = parseInt(this.getAttribute('data-id'));
            removeFromCart(id);
        });
    }
}

function addToCart(productId, delta) {
    let product = null;
    for (let i = 0; i < productDatabase.length; i++) {
        if (productDatabase[i].id === productId) {
            product = productDatabase[i];
            break;}
    }
if (!product) return;
        let existingItem = null;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            existingItem = cart[i];
break;
        }
    }
    
    if (existingItem) {
        let newQty = existingItem.quantity + delta;
if (newQty <= 0) {
            let newCart = [];
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id !== productId) {
      newCart.push(cart[i]);
  }
}
            cart = newCart;
        } else {
            existingItem.quantity = newQty;
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
    showMessage(delta > 0 ? product.name + ' added to cart' : product.name + ' removed');
}
function removeFromCart(productId) {
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id !== productId) {
            newCart.push(cart[i]);
        }
    }
    cart = newCart;
    updateCartUI();
    showMessage('Item removed from cart');
}
function showMessage(msg) {
    let toast = document.getElementById('globalToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 2000);
}
function renderProducts() {
    let filtered = getFilteredProducts();
    let grid = document.getElementById('productGrid');
    if (!grid) return;
    
    let countDisplay = document.getElementById('productCountDisplay');
    if (countDisplay) {
        let productWord = filtered.length === 1 ? 'product' : 'products';
        countDisplay.innerText = filtered.length + ' ' + productWord;
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:60px;">No products found 😕</div>';
        return;
    }
let productsHTML = '';
    for (let i = 0; i < filtered.length; i++) {
        let prod = filtered[i];
        let imgUrl = getProductImg(prod);
  productsHTML = productsHTML + `
  <div class="product-card" onclick="window.location.href='product-detail.html?id=${prod.id}'">
 <div class="product-img">
<img src="${imgUrl}" alt="${prod.name}" style="width:100%; height:180px; object-fit:cover;">
 </div>
 <div class="product-info">
 <div class="product-title">${prod.name}</div>
 <div class="price">₹${formatIndianPrice(prod.price)}</div>
<button class="add-to-cart-btn" data-id="${prod.id}">
                        <i class="fas fa-shopping-cart"></i> Add To Cart</button>
</div>
  </div>
        `;
    }
    
    grid.innerHTML = productsHTML;
        let addButtons = document.querySelectorAll('.add-to-cart-btn');
    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', function(e) {
            e.stopPropagation();
            let id = parseInt(this.getAttribute('data-id'));
            addToCart(id, 1);
        });
    }
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
    
    let tabsHTML = '';
    for (let i = 0; i < categories.length; i++) {
        let cat = categories[i];
        let activeClass = '';
        if (activeCategory === cat.key) {
            activeClass = 'active';
        }
        
        tabsHTML = tabsHTML + `
            <div class="cat-pill ${activeClass}" data-cat="${cat.key}">
                <i class="fas ${cat.icon}"></i> ${cat.label}
            </div>
        `;
    }
    
    container.innerHTML = tabsHTML;
let pills = document.querySelectorAll('.cat-pill');
    for (let i = 0; i < pills.length; i++) {
        pills[i].addEventListener('click', function() {
            activeCategory = this.getAttribute('data-cat');
            renderCategoryTabs();
 renderProducts();
        });
    }
}
function renderFeaturedProducts() {
    let featured = productDatabase.slice(0, 8);
    let grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    let featuredHTML = '';
    for (let i = 0; i < featured.length; i++) {
        let prod = featured[i];
        let imgUrl = getProductImg(prod);
       featuredHTML = featuredHTML + `
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
 }
    
    grid.innerHTML = featuredHTML;
        let addButtons = document.querySelectorAll('.add-to-cart-btn');
    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', function(e) {
            e.stopPropagation();
            let id = parseInt(this.getAttribute('data-id'));
            addToCart(id, 1);
        });
    }
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
 if (closeBtn) {
closeBtn.addEventListener('click', closeCart);
    }
if (overlay) {
overlay.addEventListener('click', closeCart);
    }
if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showMessage('Cart is empty');
                return;
            }
            
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                total = total + (cart[i].price * cart[i].quantity);
            }
            
  alert('Thanks for shopping! Total: ₹' + formatIndianPrice(total));
            cart = [];
            updateCartUI();
 closeCart();
 showMessage('Order placed! 😁');
        });
    }
}
function initSearch() {
    let searchInput = document.getElementById('searchInput');
    let searchBtn = document.getElementById('searchButton');
    
    if (!searchInput || !searchBtn) return;
    
    function performSearch() {
        searchQuery = searchInput.value;
        renderProducts();
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}
function saveCart() {
    localStorage.setItem('mycart_data', JSON.stringify(cart));
}

function loadCart() {
    let saved = localStorage.getItem('mycart_data');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}
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
window.addEventListener('beforeunload', saveCart);
init();
