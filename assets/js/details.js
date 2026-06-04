const items = {
  'kids-sneakers': {
    name: 'Kids Sneakers', category: 'Shoes', price: 34.99,
    description: 'Bright, cushioned sneakers for all-day play.',
    image: 'https://images.pexels.com/photos/4987534/pexels-photo-4987534.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['5','6','7','8','9','10','11'],
    ages: ['1 year','1-2 years','2 years','2-3 years','3-4 years','4-5 years','5-6 years'],
    heights: ['28-30 in','30-32 in','32-35 in','35-37 in','37-39 in','39-42 in','42-44 in'],
    weights: ['20-22 lbs','22-25 lbs','25-28 lbs','28-31 lbs','31-35 lbs','35-39 lbs','39-44 lbs']
  },
  'denim-jacket': {
    name: 'Denim Jacket', category: 'Jackets', price: 44.99,
    description: 'A classic denim jacket with just enough stretch for everyday adventures.',
    image: 'https://images.pexels.com/photos/3934038/pexels-photo-3934038.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'graphic-tee': {
    name: 'Graphic Tee', category: 'Playwear', price: 18.99,
    description: 'Soft cotton tee with playful print and a relaxed fit.',
    image: 'https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['18M','2T','3T','4T','5','6'],
    ages: ['1 year','2 years','3 years','4 years','5 years','6 years'],
    heights: ['28-31 in','31-34 in','34-37 in','37-40 in','40-43 in','43-46 in'],
    weights: ['20-24 lbs','24-28 lbs','28-32 lbs','32-36 lbs','36-41 lbs','41-46 lbs']
  },
  'play-hoodie': {
    name: 'Play Hoodie', category: 'Playwear', price: 26.99,
    description: 'Cozy hoodie made to move with soft cotton and bold color.',
    image: 'https://images.pexels.com/photos/11286070/pexels-photo-11286070.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'stretch-jeans': {
    name: 'Stretch Jeans', category: 'Jeans', price: 32.99,
    description: 'Flexible denim made for running, jumping, and play.',
    image: 'https://images.pexels.com/photos/17839401/pexels-photo-17839401.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['5','6','7','8','9','10','11'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['34-37 in','37-40 in','40-43 in','43-46 in','46-49 in'],
    weights: ['25-29 lbs','29-33 lbs','33-37 lbs','37-41 lbs','41-46 lbs']
  },
  'soft-jeans': {
    name: 'Soft Jeans', category: 'Jeans', price: 29.99,
    description: 'Gentle denim with stretch for everyday wear.',
    image: 'https://images.pexels.com/photos/8544384/pexels-photo-8544384.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['5','6','7','8','9','10','11'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['34-37 in','37-40 in','40-43 in','43-46 in','46-49 in'],
    weights: ['25-29 lbs','29-33 lbs','33-37 lbs','37-41 lbs','41-46 lbs']
  },
  'puffer-jacket': {
    name: 'Puffer Jacket', category: 'Jackets', price: 49.99,
    description: 'Soft quilted jacket for extra warmth and cozy layering.',
    image: 'https://images.pexels.com/photos/7375307/pexels-photo-7375307.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'rain-jacket': {
    name: 'Rain Jacket', category: 'Jackets', price: 42.99,
    description: 'Lightweight, splash-proof jacket for damp weather fun.',
    image: 'https://images.pexels.com/photos/14753791/pexels-photo-14753791.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'high-top-sneakers': {
    name: 'High-Top Sneakers', category: 'Shoes', price: 38.99,
    description: 'Bold sneakers with padded ankle support for extra comfort.',
    image: 'https://images.pexels.com/photos/33335315/pexels-photo-33335315.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['6','7','8','9','10','11'],
    ages: ['3 years','4 years','5 years','6 years'],
    heights: ['37-40 in','40-43 in','43-46 in','46-49 in'],
    weights: ['30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'slip-on-shoes': {
    name: 'Slip-On Shoes', category: 'Shoes', price: 31.49,
    description: 'Easy on/off shoes with a soft cushioned sole.',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['5','6','7','8','9','10'],
    ages: ['2 years','3 years','4 years','5 years'],
    heights: ['32-35 in','35-38 in','38-41 in','41-44 in'],
    weights: ['24-28 lbs','28-32 lbs','32-36 lbs','36-40 lbs']
  },
  'sport-shoes': {
    name: 'Sport Shoes', category: 'Shoes', price: 36.99,
    description: 'Sporty shoes built for outdoor play and running around.',
    image: 'https://images.pexels.com/photos/29699313/pexels-photo-29699313.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['6','7','8','9','10','11'],
    ages: ['3 years','4 years','5 years','6 years'],
    heights: ['37-40 in','40-43 in','43-46 in','46-49 in'],
    weights: ['30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'denim-shorts': {
    name: 'Denim Shorts', category: 'Jeans', price: 27.99,
    description: 'Cool and easy denim shorts for warm days and playtime.',
    image: 'https://images.pexels.com/photos/16420016/pexels-photo-16420016.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['4','5','6','7','8'],
    ages: ['3 years','4 years','5 years','6 years'],
    heights: ['36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'play-jacket': {
    name: 'Play Jacket', category: 'Jackets', price: 39.99,
    description: 'Water-resistant comfort with soft lining for easy movement.',
    image: 'https://images.pexels.com/photos/7944023/pexels-photo-7944023.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'slim-jeans': {
    name: 'Slim Jeans', category: 'Jeans', price: 33.50,
    description: 'Neat fit denim with a soft waistband for extra comfort.',
    image: 'https://images.pexels.com/photos/1662631/pexels-photo-1662631.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['5','6','7','8','9','10'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['35-38 in','38-41 in','41-44 in','44-47 in','47-50 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'cozy-hoodie': {
    name: 'Cozy Hoodie', category: 'Playwear', price: 24.99,
    description: 'Lightweight hoodie made for everyday comfort.',
    image: 'https://images.pexels.com/photos/11286070/pexels-photo-11286070.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'lounge-set': {
    name: 'Lounge Set', category: 'Playwear', price: 29.49,
    description: 'Soft matching set for rest days and relaxed play.',
    image: 'https://images.pexels.com/photos/20026084/pexels-photo-20026084.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  },
  'joggers': {
    name: 'Joggers', category: 'Playwear', price: 22.99,
    description: 'Stretchy joggers designed for endless play and calm comfort.',
    image: 'https://images.pexels.com/photos/5896755/pexels-photo-5896755.jpeg?auto=compress&cs=tinysrgb&w=1400',
    sizes: ['2T','3T','4T','5','6'],
    ages: ['2 years','3 years','4 years','5 years','6 years'],
    heights: ['33-36 in','36-39 in','39-42 in','42-45 in','45-48 in'],
    weights: ['26-30 lbs','30-34 lbs','34-38 lbs','38-42 lbs','42-46 lbs']
  }
};

(function () {
  // ── Helpers ────────────────────────────────────────────────────────────────
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  function formatMoney(v) { return '$' + Number(v).toFixed(2); }
  function fieldLabel(k) {
    return { sizes: 'Size', ages: 'Age', heights: 'Height', weights: 'Weight' }[k] || k;
  }
  function summaryLabel(k) {
    return { sizes: 'Available sizes', ages: 'Recommended ages', heights: 'Height range', weights: 'Weight range' }[k] || k;
  }

  // ── Resolve item ───────────────────────────────────────────────────────────
  const itemId      = getParam('id');
  const imageParam  = getParam('image');
  const item        = items[itemId];
  const detailContent = document.getElementById('detailContent');

  // If item not found, redirect quietly to collections
  if (!item || !detailContent) {
    window.location.href = 'collections.html';
    return;
  }

  // Use image from collections page link if provided, otherwise item default
  const heroImage = imageParam || item.image;

  // ── Storage ────────────────────────────────────────────────────────────────
  const STORAGE_USER      = 'tinythreadsUser';
  const STORAGE_CART      = 'tinythreadsCartByUser';
  const STORAGE_FAVORITES = 'tinythreadsFavoritesByUser';
  const STORAGE_USERS     = 'tinythreadsUsers';

  let currentUser  = JSON.parse(localStorage.getItem(STORAGE_USER) || 'null');
  let cartMap      = JSON.parse(localStorage.getItem(STORAGE_CART) || '{}');
  let favoriteMap  = JSON.parse(localStorage.getItem(STORAGE_FAVORITES) || '{}');
  let cart         = currentUser ? (cartMap[currentUser.email] || {}) : {};
  let favorites    = currentUser ? (favoriteMap[currentUser.email] || {}) : {};
  let users        = JSON.parse(localStorage.getItem(STORAGE_USERS) || '{}');

  function saveState() {
    if (currentUser) {
      cartMap[currentUser.email]     = cart;
      favoriteMap[currentUser.email] = favorites;
    }
    localStorage.setItem(STORAGE_USER,      JSON.stringify(currentUser));
    localStorage.setItem(STORAGE_CART,      JSON.stringify(cartMap));
    localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favoriteMap));
    localStorage.setItem(STORAGE_USERS,     JSON.stringify(users));
    updateCartCount();
    updateFavoriteCount();
    refreshAddToCart();
    refreshFavoriteBtn();
  }

  // ── Count badges ──────────────────────────────────────────────────────────
  function updateCartCount() {
    const el = document.getElementById('cartCount');
    if (!el) return;
    const n = Object.keys(cart).length;
    el.textContent = n;
    el.style.display = n ? 'inline-flex' : 'none';
  }
  function updateFavoriteCount() {
    const el = document.getElementById('favoriteCount');
    if (!el) return;
    const n = Object.keys(favorites).length;
    el.textContent = n;
    el.style.display = n ? 'inline-flex' : 'none';
  }

  // ── Detail page buttons state ─────────────────────────────────────────────
  function refreshAddToCart() {
    const btn = document.getElementById('addToCartButton');
    if (!btn) return;
    const inCart = currentUser && cart[item.name] && cart[item.name].quantity > 0;
    btn.textContent = inCart ? 'Added' : 'Add to Cart';
    btn.disabled    = !!inCart;
  }
  function refreshFavoriteBtn() {
    const btn = document.getElementById('favoriteDetailButton');
    if (!btn) return;
    const saved = currentUser && !!favorites[item.name];
    btn.textContent = saved ? 'Saved' : 'Save to Favorites';
    btn.classList.toggle('active', saved);
  }

  // ── Render detail HTML ─────────────────────────────────────────────────────
  const fields = ['sizes', 'ages', 'heights', 'weights'];
  const summaryHtml = fields.map(k =>
    `<div><strong>${summaryLabel(k)}:</strong> ${item[k].join(', ')}</div>`
  ).join('');
  const selectorsHtml = fields.map(k => {
    const opts = item[k].map(v => `<option value="${v}">${v}</option>`).join('');
    return `
      <div class="detail-meta">
        <label for="${k}Select">${fieldLabel(k)}</label>
        <select id="${k}Select" data-attr="${k}">${opts}</select>
      </div>`;
  }).join('');

  detailContent.innerHTML = `
    <div class="detail-hero">
      <div class="detail-image">
        <img src="${heroImage}" alt="${item.name}">
      </div>
      <div class="detail-panel">
        <span class="eyebrow">${item.category}</span>
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        <div class="detail-meta">
          <div><strong>Price:</strong> ${formatMoney(item.price)}</div>
          <div><strong>Category:</strong> ${item.category}</div>
        </div>
        <div class="detail-meta">${summaryHtml}</div>
        ${selectorsHtml}
        <div class="detail-actions">
          <button id="addToCartButton" class="btn btn-primary" type="button">Add to Cart</button>
          <button id="favoriteDetailButton" class="btn btn-outline" type="button">Save to Favorites</button>
        </div>
        <div id="detailMessage" class="small" style="margin-top:12px;color:var(--text-muted)"></div>
        <div class="section-footer">
          <a href="collections.html" class="btn btn-outline">Back to collections</a>
          <a href="index.html" class="btn btn-primary">Home</a>
        </div>
      </div>
    </div>`;

  refreshAddToCart();
  refreshFavoriteBtn();

  // ── Add to cart ────────────────────────────────────────────────────────────
  document.getElementById('addToCartButton').addEventListener('click', function () {
    if (!currentUser) { window.location.href = 'login.html'; return; }
    const selections = {};
    document.querySelectorAll('select[data-attr]').forEach(s => {
      selections[s.dataset.attr] = s.value;
    });
    if (cart[item.name]) {
      Object.assign(cart[item.name], selections);
    } else {
      cart[item.name] = { name: item.name, price: item.price, quantity: 1, ...selections };
    }
    saveState();
    const msg = document.getElementById('detailMessage');
    if (msg) msg.textContent = 'Added to cart with selected options.';
  });

  // ── Favorite ───────────────────────────────────────────────────────────────
  document.getElementById('favoriteDetailButton').addEventListener('click', function () {
    if (!currentUser) { window.location.href = 'login.html'; return; }
    const msg = document.getElementById('detailMessage');
    if (favorites[item.name]) {
      delete favorites[item.name];
      if (msg) msg.textContent = 'Removed from favorites.';
    } else {
      favorites[item.name] = { name: item.name, price: item.price };
      if (msg) msg.textContent = 'Saved to favorites.';
    }
    saveState();
  });

  // ── Cart overlay ───────────────────────────────────────────────────────────
  function renderCart() {
    const cartItems  = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal  = document.getElementById('cartTotal');
    if (!cartItems || !cartFooter || !cartTotal) return;
    const entries = Object.values(cart);
    cartItems.innerHTML = '';
    if (!entries.length) {
      cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add something fun!</p>';
      cartFooter.classList.add('hidden');
      return;
    }
    let total = 0;
    entries.forEach(i => {
      total += i.price * i.quantity;
      const row = document.createElement('div');
      row.className = 'cart-row';
      row.innerHTML = `
        <div>
          <strong>${i.name}</strong>
          <p>${i.quantity} × ${formatMoney(i.price)}</p>
        </div>
        <div class="cart-row-actions">
          <button type="button" class="btn btn-outline cart-decrease" data-item="${i.name}" aria-label="Decrease quantity"><i class="bi bi-dash-lg" aria-hidden="true"></i></button>
          <span>${i.quantity}</span>
          <button type="button" class="btn btn-outline cart-increase" data-item="${i.name}" aria-label="Increase quantity"><i class="bi bi-plus-lg" aria-hidden="true"></i></button>
          <button type="button" class="btn btn-outline cart-delete" data-item="${i.name}" aria-label="Remove item"><i class="bi bi-trash3" aria-hidden="true"></i></button>
        </div>`;
      cartItems.appendChild(row);
    });
    cartTotal.textContent = formatMoney(total);
    cartFooter.classList.remove('hidden');
    cartItems.querySelectorAll('.cart-decrease').forEach(b => b.addEventListener('click', () => adjustQty(b.dataset.item, -1)));
    cartItems.querySelectorAll('.cart-increase').forEach(b => b.addEventListener('click', () => adjustQty(b.dataset.item,  1)));
    cartItems.querySelectorAll('.cart-delete').forEach(b  => b.addEventListener('click', () => removeItem(b.dataset.item)));
  }

  function adjustQty(name, delta) {
    if (!cart[name]) return;
    cart[name].quantity += delta;
    if (cart[name].quantity < 1) delete cart[name];
    saveState(); renderCart();
  }
  function removeItem(name) {
    delete cart[name];
    saveState(); renderCart();
  }

  function openCart()  { renderCart(); document.getElementById('cartOverlay').classList.remove('hidden'); document.getElementById('cartOverlay').classList.add('show'); }
  function closeCart() { document.getElementById('cartOverlay').classList.add('hidden'); document.getElementById('cartOverlay').classList.remove('show'); }

  // ── Favorites overlay ──────────────────────────────────────────────────────
  function renderFavorites() {
    const favItems = document.getElementById('favoritesItems');
    if (!favItems) return;
    const entries = Object.values(favorites);
    favItems.innerHTML = '';
    if (!entries.length) {
      favItems.innerHTML = '<p class="empty-cart">No favorites yet. Save an item you love.</p>';
      return;
    }
    entries.forEach(i => {
      const row = document.createElement('div');
      row.className = 'favorite-row';
      row.innerHTML = `
        <div>
          <strong>${i.name}</strong>
          <p>${formatMoney(i.price)}</p>
        </div>
        <button type="button" class="btn btn-outline favorite-remove" data-item="${i.name}" aria-label="Remove favorite">
          <i class="bi bi-heart-fill" aria-hidden="true"></i>
        </button>`;
      favItems.appendChild(row);
    });
    favItems.querySelectorAll('.favorite-remove').forEach(b => b.addEventListener('click', () => {
      delete favorites[b.dataset.item];
      saveState(); renderFavorites();
      // also update detail page fav button if it's the current item
      if (b.dataset.item === item.name) refreshFavoriteBtn();
    }));
  }

  function openFavorites()  { renderFavorites(); document.getElementById('favoritesOverlay').classList.remove('hidden'); document.getElementById('favoritesOverlay').classList.add('show'); }
  function closeFavorites() { document.getElementById('favoritesOverlay').classList.add('hidden'); document.getElementById('favoritesOverlay').classList.remove('show'); }

  // ── Auth nav ───────────────────────────────────────────────────────────────
  const authButton      = document.getElementById('authButton');
  const authMenu        = document.getElementById('authMenu');
  const authChevron     = document.getElementById('authChevron');
  const authLabel       = document.getElementById('authLabel');
  const logoutNavButton = document.getElementById('logoutNavButton');

  function closeAuthMenu() {
    authMenu.classList.add('hidden');
    authButton.setAttribute('aria-expanded', 'false');
  }
  function updateAuthNav() {
    if (currentUser) {
      const name = currentUser.name || currentUser.email.split('@')[0];
      authLabel.textContent = `Welcome, ${name}`;
      authButton.setAttribute('aria-label', `Account menu for ${name}`);
      authChevron.classList.remove('hidden');
    } else {
      authLabel.textContent = 'Login';
      authButton.setAttribute('aria-label', 'Sign in');
      authChevron.classList.add('hidden');
      closeAuthMenu();
    }
    updateCartCount();
    updateFavoriteCount();
    refreshAddToCart();
    refreshFavoriteBtn();
  }

  authButton.addEventListener('click', function (e) {
    e.stopPropagation();
    if (!currentUser) { window.location.href = 'login.html'; return; }
    authMenu.classList.toggle('hidden');
    authButton.setAttribute('aria-expanded', authMenu.classList.contains('hidden') ? 'false' : 'true');
  });

  logoutNavButton.addEventListener('click', function () {
    if (currentUser) { cartMap[currentUser.email] = cart; favoriteMap[currentUser.email] = favorites; }
    currentUser = null; cart = {}; favorites = {};
    saveState(); updateAuthNav(); closeFavorites();
    window.location.href = 'login.html';
  });

  document.addEventListener('click', function (e) {
    if (currentUser && !authMenu.classList.contains('hidden') && !e.target.closest('.auth-dropdown')) {
      closeAuthMenu();
    }
  });

  // ── Navbar button wiring ───────────────────────────────────────────────────
  document.getElementById('cartButton').addEventListener('click', function () {
    const overlay = document.getElementById('cartOverlay');
    overlay.classList.contains('show') ? closeCart() : openCart();
  });

  document.getElementById('favoriteButton').addEventListener('click', function () {
    if (!currentUser) { window.location.href = 'login.html'; return; }
    const overlay = document.getElementById('favoritesOverlay');
    overlay.classList.contains('show') ? closeFavorites() : openFavorites();
  });

  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('closeFavorites').addEventListener('click', closeFavorites);
  document.getElementById('cartBackdrop').addEventListener('click', closeCart);
  document.getElementById('favoritesBackdrop').addEventListener('click', closeFavorites);

  document.getElementById('checkoutButton').addEventListener('click', function () {
    if (!Object.keys(cart).length) return;
    cart = {}; saveState(); renderCart(); closeCart();
  });
  document.getElementById('deleteAllButton').addEventListener('click', function () {
    if (!Object.keys(cart).length) return;
    cart = {}; saveState(); renderCart();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeCart(); closeFavorites(); }
  });

  // ── Cross-tab sync ─────────────────────────────────────────────────────────
  window.addEventListener('storage', function (e) {
    if (!['tinythreadsCartByUser','tinythreadsFavoritesByUser','tinythreadsUser'].includes(e.key)) return;
    currentUser = JSON.parse(localStorage.getItem(STORAGE_USER) || 'null');
    cartMap     = JSON.parse(localStorage.getItem(STORAGE_CART) || '{}');
    favoriteMap = JSON.parse(localStorage.getItem(STORAGE_FAVORITES) || '{}');
    cart        = currentUser ? (cartMap[currentUser.email] || {}) : {};
    favorites   = currentUser ? (favoriteMap[currentUser.email] || {}) : {};
    updateCartCount(); updateFavoriteCount();
    refreshAddToCart(); refreshFavoriteBtn();
    updateAuthNav();
    if (document.getElementById('cartOverlay').classList.contains('show')) renderCart();
  });

  // ── Init ───────────────────────────────────────────────────────────────────
  updateCartCount();
  updateFavoriteCount();
  updateAuthNav();
})();