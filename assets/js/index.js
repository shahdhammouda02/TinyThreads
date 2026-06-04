// Carousel slider
(function(){
    const carousel = document.getElementById('carousel');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prev = document.querySelector('.carousel-btn.prev');
    const next = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.getElementById('carouselDots');
    let activeIndex = 0;
    let carouselTimer = null;
    let touchStartX = 0;

    if(!carousel || !slides.length || !prev || !next || !dotsContainer) return;

    function setSlide(index){
        index = (index + slides.length) % slides.length;
        slides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
        Array.from(dotsContainer.children).forEach((dot, idx) => dot.classList.toggle('active', idx === index));
        activeIndex = index;
    }

    function createDots(){
        slides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'dot';
            dot.setAttribute('aria-label', `Show slide ${idx + 1}`);
            dot.addEventListener('click', () => {
                setSlide(idx);
                restartCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function showNext(){ setSlide(activeIndex + 1); restartCarousel(); }
    function showPrevious(){ setSlide(activeIndex - 1); restartCarousel(); }
    function startCarousel(){ carouselTimer = window.setInterval(() => setSlide(activeIndex + 1), 2000); }
    function stopCarousel(){ window.clearInterval(carouselTimer); }
    function restartCarousel(){ stopCarousel(); startCarousel(); }

    createDots();
    setSlide(0);
    startCarousel();

    prev.addEventListener('click', showPrevious);
    next.addEventListener('click', showNext);

    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
    carousel.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].clientX;
        stopCarousel();
    });
    carousel.addEventListener('touchend', (event) => {
        const deltaX = event.changedTouches[0].clientX - touchStartX;
        if(Math.abs(deltaX) > 40){ deltaX < 0 ? showNext() : showPrevious(); }
        startCarousel();
    });

    document.addEventListener('keydown', (event) => {
        if(event.target.matches('input,textarea')) return;
        if(event.key === 'ArrowRight') showNext();
        if(event.key === 'ArrowLeft') showPrevious();
    });
})();

// Cart, favorites, and auth nav state
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

    const collectionItemsById = {
        jackets: [
            { name: 'Denim Jacket', price: 44.99 },
            { name: 'Play Jacket', price: 39.99 },
            { name: 'Puffer Jacket', price: 49.99 },
            { name: 'Rain Jacket', price: 42.99 }
        ],
        jeans: [
            { name: 'Stretch Jeans', price: 32.99 },
            { name: 'Soft Jeans', price: 29.99 },
            { name: 'Slim Jeans', price: 33.50 },
            { name: 'Denim Shorts', price: 27.99 }
        ],
        shoes: [
            { name: 'Kids Sneakers', price: 34.99 },
            { name: 'High-Top Sneakers', price: 38.99 },
            { name: 'Slip-On Shoes', price: 31.49 },
            { name: 'Sport Shoes', price: 36.99 }
        ]
    };

    function updateCartCount(){
        const total = Object.keys(cart).length;
        cartCount.textContent = total;
        cartCount.style.display = total ? 'inline-flex' : 'none';
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
        favoriteCount.textContent = total;
        favoriteCount.style.display = total ? 'inline-flex' : 'none';
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
        const entries = Object.values(favorites);
        favoritesItems.innerHTML = '';
        if(!entries.length){
            favoritesItems.innerHTML = '<p class="empty-cart">No favorites yet. Save an item you love.</p>';
            return;
        }
        entries.forEach(item => {
            const row = document.createElement('div');
            row.className = 'favorite-row';
            const itemDetails = item.type === 'collection'
                ? `<ul class="favorite-item-list">${item.items.map(sub => `<li>${sub.name} — ${formatMoney(sub.price)}</li>`).join('')}</ul>`
                : '';
            row.innerHTML = `
                <div>
                    <strong>${item.name}</strong>
                    <p>${formatMoney(item.price)}</p>
                    ${itemDetails}
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
        saveState(); updateFavoriteCount(); updateFavoriteButtons(); renderFavorites();
    }

    function createFavoriteRecord(name, price, type, items){
        return { name, price, type, items };
    }

    function toggleFavorite(name, price, type = 'item', items = []){
        if(!currentUser){ window.location.href = 'login.html'; return; }
        if(favorites[name]){ delete favorites[name]; }
        else { favorites[name] = createFavoriteRecord(name, price, type, items); }
        saveState(); updateFavoriteCount(); updateFavoriteButtons(); renderFavorites();
    }

    function openCart(){ renderCart(); cartOverlay.classList.remove('hidden'); cartOverlay.classList.add('show'); }
    function closeCartOverlay(){ cartOverlay.classList.add('hidden'); cartOverlay.classList.remove('show'); }
    function openFavorites(){ renderFavorites(); favoritesOverlay.classList.remove('hidden'); favoritesOverlay.classList.add('show'); }
    function closeFavoritesOverlay(){ favoritesOverlay.classList.add('hidden'); favoritesOverlay.classList.remove('show'); }

    function closeAuthMenu(){
        authMenu.classList.add('hidden');
        authButton.setAttribute('aria-expanded', 'false');
    }

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
        if(currentUser && !authMenu.classList.contains('hidden') && !event.target.closest('.auth-dropdown')){
            closeAuthMenu();
        }
    });

    cartButton.addEventListener('click', () => {
        if(cartOverlay.classList.contains('show')){ closeCartOverlay(); } else { openCart(); }
    });

    favoriteButton.addEventListener('click', () => {
        if(!currentUser){ window.location.href = 'login.html'; return; }
        if(favoritesOverlay.classList.contains('show')){ closeFavoritesOverlay(); } else { openFavorites(); }
    });

    closeCart.addEventListener('click', closeCartOverlay);
    closeFavorites.addEventListener('click', closeFavoritesOverlay);
    cartBackdrop.addEventListener('click', closeCartOverlay);
    favoritesBackdrop.addEventListener('click', closeFavoritesOverlay);
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeCartOverlay(); closeFavoritesOverlay(); } });

    checkoutButton.addEventListener('click', () => {
        if(!Object.keys(cart).length) return;
        cart = {}; saveState(); updateCartCount(); renderCart(); closeCartOverlay();
    });

    deleteAllButton.addEventListener('click', () => { if(!Object.keys(cart).length) return; clearCart(); });

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
            const itemName = article.dataset.item;
            const isCollection = article.classList.contains('category-card');
            const price = Number(article.dataset.price || 0);
            if(isCollection){
                const categoryId = article.dataset.id;
                const items = collectionItemsById[categoryId] || [];
                const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
                toggleFavorite(itemName, totalPrice, 'collection', items);
            } else {
                toggleFavorite(itemName, price, 'item', [{ name: itemName, price }]);
            }
        });
    });

    window.addEventListener('storage', function(event){
        if(!['tinythreadsCartByUser','tinythreadsFavoritesByUser','tinythreadsUser'].includes(event.key)) return;
        currentUser = JSON.parse(localStorage.getItem(STORAGE_USER) || 'null');
        cartMap = JSON.parse(localStorage.getItem(STORAGE_CART) || '{}');
        favoriteMap = JSON.parse(localStorage.getItem(STORAGE_FAVORITES) || '{}');
        cart = currentUser ? (cartMap[currentUser.email] || {}) : {};
        favorites = currentUser ? (favoriteMap[currentUser.email] || {}) : {};
        updateCartCount();
        updateCartButtons();
        updateFavoriteCount();
        updateFavoriteButtons();
        updateAuthNav();
        if(cartOverlay && cartOverlay.classList.contains('show')){
            renderCart();
        }
    });

    const navigableCards = Array.from(document.querySelectorAll('[data-id]'));
    navigableCards.forEach(card => {
        card.addEventListener('click', function(event){
            if(event.target.closest('button, a')) return;
            const itemId = card.dataset.id;
            if(!itemId) return;
            if(card.classList.contains('category-card')){
                window.location.href = `collections.html#${encodeURIComponent(itemId)}`;
            } else {
                window.location.href = `details.html?id=${encodeURIComponent(itemId)}`;
            }
        });
        card.addEventListener('keydown', function(event){
            if(event.key !== 'Enter') return;
            if(event.target.closest('button, a')) return;
            const itemId = card.dataset.id;
            if(!itemId) return;
            if(card.classList.contains('category-card')){
                window.location.href = `collections.html#${encodeURIComponent(itemId)}`;
            } else {
                window.location.href = `details.html?id=${encodeURIComponent(itemId)}`;
            }
        });
    });

    updateCartCount();
    updateFavoriteCount();
    updateFavoriteButtons();
    updateAuthNav();
})();
