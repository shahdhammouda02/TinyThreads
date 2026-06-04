const categoryButtons = document.querySelectorAll('.toggle-category');
categoryButtons.forEach(button => {
    const target = button.dataset.target;
    const cards = document.querySelectorAll(`#${target} .hidden-card`);
    if(!cards.length){ button.style.display = 'none'; return; }
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
        const expanded = button.classList.toggle('expanded');
        cards.forEach(card => card.classList.toggle('hidden-card', !expanded));
        button.textContent = expanded ? 'Show less' : 'Show more';
        button.setAttribute('aria-expanded', String(expanded));
    });
});

(function(){
    const cartButton = document.getElementById('cartButton');
    const favoriteButton = document.getElementById('favoriteButton');
    const cartCount = document.getElementById('cartCount');
    const favoriteCount = document.getElementById('favoriteCount');
    const cartOverlay = document.getElementById('cartOverlay');
    const favoritesOverlay = document.getElementById('favoritesOverlay');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const favoritesBackdrop = document.getElementById('favoritesBackdrop');
    const closeCart = document.getElementById('closeCart');
    const closeFavorites = document.getElementById('closeFavorites');
    const cartItems = document.getElementById('cartItems');
    const favoritesItems = document.getElementById('favoritesItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutButton = document.getElementById('checkoutButton');
    const deleteAllButton = document.getElementById('deleteAllButton');
    const addCartButtons = Array.from(document.querySelectorAll('.add-cart-btn'));
    const favoriteButtons = Array.from(document.querySelectorAll('.favorite-btn'));
    const authButton = document.getElementById('authButton');
    const authMenu = document.getElementById('authMenu');
    const authChevron = document.getElementById('authChevron');
    const logoutNavButton = document.getElementById('logoutNavButton');
    const authLabel = document.getElementById('authLabel');

    const STORAGE_USER = 'tinythreadsUser';
    const STORAGE_CART = 'tinythreadsCartByUser';
    const STORAGE_FAVORITES = 'tinythreadsFavoritesByUser';
    const STORAGE_USERS = 'tinythreadsUsers';

    let currentUser = JSON.parse(localStorage.getItem(STORAGE_USER) || 'null');
    let cartMap = JSON.parse(localStorage.getItem(STORAGE_CART) || '{}');
    let favoriteMap = JSON.parse(localStorage.getItem(STORAGE_FAVORITES) || '{}');
    let cart = currentUser ? (cartMap[currentUser.email] || {}) : {};
    let favorites = currentUser ? (favoriteMap[currentUser.email] || {}) : {};
    let users = JSON.parse(localStorage.getItem(STORAGE_USERS) || '{}');

    function saveState(){
        if(currentUser){
            cartMap[currentUser.email] = cart;
            favoriteMap[currentUser.email] = favorites;
        }
        localStorage.setItem(STORAGE_USER, JSON.stringify(currentUser));
        localStorage.setItem(STORAGE_CART, JSON.stringify(cartMap));
        localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favoriteMap));
        localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
        updateCartButtons();
        updateFavoriteButtons();
        updateFavoriteCount();
        if(cartOverlay && !cartOverlay.classList.contains('hidden')){ renderCart(); }
    }

    function formatMoney(value){ return '$' + Number(value).toFixed(2); }

    function updateCartCount(){
        const total = Object.keys(cart).length;
        if(cartCount){ cartCount.textContent = total; cartCount.style.display = total ? 'inline-flex' : 'none'; }
    }

    function updateCartButtons(){
        addCartButtons.forEach(button => {
            const article = button.closest('[data-item]');
            const name = article ? article.dataset.item : null;
            if(currentUser && name && cart[name] && cart[name].quantity > 0){
                button.disabled = true;
                button.textContent = 'Added';
            } else {
                button.disabled = false;
                button.textContent = 'Add to Cart';
            }
        });
    }

    function updateFavoriteCount(){
        const total = Object.keys(favorites).length;
        if(favoriteCount){ favoriteCount.textContent = total; favoriteCount.style.display = total ? 'inline-flex' : 'none'; }
    }

    function updateFavoriteButtons(){
        favoriteButtons.forEach(button => {
            const article = button.closest('[data-item]');
            const name = article ? article.dataset.item : null;
            const isFavorite = currentUser && name && favorites[name];
            button.classList.toggle('active', !!isFavorite);
            button.setAttribute('aria-pressed', String(!!isFavorite));
            const icon = button.querySelector('.favorite-icon');
            if(icon){ icon.className = isFavorite ? 'bi bi-heart-fill favorite-icon' : 'bi bi-heart favorite-icon'; }
        });
    }

    function renderCart(){
        if(!cartItems || !cartFooter || !cartTotal) return;
        const entries = Object.values(cart);
        cartItems.innerHTML = '';
        if(!entries.length){
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add something fun!</p>';
            cartFooter.classList.add('hidden');
            return;
        }
        let total = 0;
        entries.forEach(item => {
            total += item.price * item.quantity;
            const row = document.createElement('div');
            row.className = 'cart-row';
            row.innerHTML = `
                <div>
                    <strong>${item.name}</strong>
                    <p>${item.quantity} × ${formatMoney(item.price)}</p>
                </div>
                <div class="cart-row-actions">
                    <button type="button" class="btn btn-outline cart-decrease" data-item="${item.name}" aria-label="Decrease quantity">
                        <i class="bi bi-dash-lg" aria-hidden="true"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button type="button" class="btn btn-outline cart-increase" data-item="${item.name}" aria-label="Increase quantity">
                        <i class="bi bi-plus-lg" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-outline cart-delete" data-item="${item.name}" aria-label="Remove item">
                        <i class="bi bi-trash3" aria-hidden="true"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(row);
        });
        cartTotal.textContent = formatMoney(total);
        cartFooter.classList.remove('hidden');
        cartItems.querySelectorAll('.cart-decrease').forEach(b => b.addEventListener('click', () => adjustQty(b.dataset.item, -1)));
        cartItems.querySelectorAll('.cart-increase').forEach(b => b.addEventListener('click', () => adjustQty(b.dataset.item, 1)));
        cartItems.querySelectorAll('.cart-delete').forEach(b => b.addEventListener('click', () => removeItem(b.dataset.item)));
    }

    function renderFavorites(){
        if(!favoritesItems) return;
        const entries = Object.values(favorites);
        favoritesItems.innerHTML = '';
        if(!entries.length){
            favoritesItems.innerHTML = '<p class="empty-cart">No favorites yet. Save an item you love.</p>';
            return;
        }
        entries.forEach(item => {
            const row = document.createElement('div');
            row.className = 'favorite-row';
            row.innerHTML = `
                <div>
                    <strong>${item.name}</strong>
                    <p>${formatMoney(item.price)}</p>
                </div>
                <button type="button" class="btn btn-outline favorite-remove" data-item="${item.name}" aria-label="Remove favorite">
                    <i class="bi bi-heart-fill" aria-hidden="true"></i>
                </button>
            `;
            favoritesItems.appendChild(row);
        });
        favoritesItems.querySelectorAll('.favorite-remove').forEach(b => b.addEventListener('click', () => removeFavorite(b.dataset.item)));
    }

    function adjustQty(name, delta){
        if(!cart[name]) return;
        cart[name].quantity += delta;
        if(cart[name].quantity < 1) delete cart[name];
        saveState(); updateCartCount(); renderCart();
    }

    function removeItem(name){
        if(!cart[name]) return;
        delete cart[name];
        saveState(); updateCartCount(); renderCart();
    }

    function clearCart(){
        cart = {};
        saveState(); updateCartCount(); renderCart();
    }

    function removeFavorite(name){
        if(!favorites[name]) return;
        delete favorites[name];
        saveState(); renderFavorites(); updateFavoriteCount(); updateFavoriteButtons();
    }

    function toggleFavorite(name, price){
        if(!currentUser){ window.location.href = 'login.html'; return; }
        if(favorites[name]){ delete favorites[name]; } else { favorites[name] = { name, price }; }
        saveState(); updateFavoriteCount(); updateFavoriteButtons(); renderFavorites();
    }

    function openCart(){ if(cartOverlay){ renderCart(); cartOverlay.classList.remove('hidden'); cartOverlay.classList.add('show'); } }
    function closeCartOverlay(){ if(cartOverlay){ cartOverlay.classList.add('hidden'); cartOverlay.classList.remove('show'); } }
    function openFavorites(){ if(favoritesOverlay){ renderFavorites(); favoritesOverlay.classList.remove('hidden'); favoritesOverlay.classList.add('show'); } }
    function closeFavoritesOverlay(){ if(favoritesOverlay){ favoritesOverlay.classList.add('hidden'); favoritesOverlay.classList.remove('show'); } }

    function closeAuthMenu(){ if(authMenu){ authMenu.classList.add('hidden'); } if(authButton){ authButton.setAttribute('aria-expanded', 'false'); } }

    function updateAuthNav(){
        if(currentUser){
            const userName = currentUser.name || currentUser.email.split('@')[0];
            authLabel.textContent = `Welcome, ${userName}`;
            authButton.setAttribute('aria-label', `Account menu for ${userName}`);
            authChevron.classList.remove('hidden');
        } else {
            authLabel.textContent = 'Login';
            authButton.setAttribute('aria-label', 'Sign in');
            authChevron.classList.add('hidden');
            closeAuthMenu();
        }
        updateCartButtons();
        updateFavoriteButtons();
        updateFavoriteCount();
        renderFavorites();
    }

    authButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if(!currentUser){ window.location.href = 'login.html'; return; }
        authMenu.classList.toggle('hidden');
        authButton.setAttribute('aria-expanded', authMenu.classList.contains('hidden') ? 'false' : 'true');
    });

    logoutNavButton.addEventListener('click', () => {
        if(currentUser){ cartMap[currentUser.email] = cart; favoriteMap[currentUser.email] = favorites; }
        currentUser = null; cart = {}; favorites = {};
        saveState(); updateAuthNav(); updateCartCount(); updateFavoriteCount();
        closeAuthMenu(); closeFavoritesOverlay();
        window.location.href = 'login.html';
    });

    document.addEventListener('click', function(event){
        if(currentUser && authMenu && !authMenu.classList.contains('hidden') && !event.target.closest('.auth-dropdown')){
            closeAuthMenu();
        }
    });

    cartButton.addEventListener('click', () => { if(cartOverlay && cartOverlay.classList.contains('show')){ closeCartOverlay(); } else { openCart(); } });
    favoriteButton.addEventListener('click', () => { if(!currentUser){ window.location.href = 'login.html'; return; } if(favoritesOverlay && favoritesOverlay.classList.contains('show')){ closeFavoritesOverlay(); } else { openFavorites(); } });
    if(closeCart){ closeCart.addEventListener('click', closeCartOverlay); }
    if(closeFavorites){ closeFavorites.addEventListener('click', closeFavoritesOverlay); }
    if(cartBackdrop){ cartBackdrop.addEventListener('click', closeCartOverlay); }
    if(favoritesBackdrop){ favoritesBackdrop.addEventListener('click', closeFavoritesOverlay); }
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeCartOverlay(); closeFavoritesOverlay(); } });
    if(checkoutButton){ checkoutButton.addEventListener('click', () => { if(!Object.keys(cart).length) return; cart = {}; saveState(); updateCartCount(); renderCart(); closeCartOverlay(); }); }
    if(deleteAllButton){ deleteAllButton.addEventListener('click', () => { if(!Object.keys(cart).length) return; clearCart(); }); }
    addCartButtons.forEach(button => {
        button.addEventListener('click', function(){
            if(!currentUser){ window.location.href = 'login.html'; return; }
            const article = button.closest('[data-item]');
            if(!article) return;
            const name = article.dataset.item;
            const price = Number(article.dataset.price || 0);
            if(cart[name]){ cart[name].quantity += 1; } else { cart[name] = { name, price, quantity: 1 }; }
            saveState(); updateCartCount(); updateCartButtons(); renderCart();
        });
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(){
            const article = button.closest('[data-item]');
            if(!article) return;
            toggleFavorite(article.dataset.item, Number(article.dataset.price || 0));
        });
    });

    document.querySelectorAll('.collection-card a[href^="details.html?id="]').forEach(link => {
        const card = link.closest('.collection-card');
        if(!card) return;
        const img = card.querySelector('img');
        if(!img || !img.src) return;
        const url = new URL(link.href, window.location.href);
        url.searchParams.set('image', img.src);
        link.href = url.pathname + url.search;
    });

    updateCartCount();
    updateFavoriteCount();
    updateFavoriteButtons();
    updateAuthNav();
})();
