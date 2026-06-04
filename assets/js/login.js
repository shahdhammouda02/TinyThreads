(function(){
    const authButton = document.getElementById('authButton');
    const authMenu = document.getElementById('authMenu');
    const authChevron = document.getElementById('authChevron');
    const logoutNavButton = document.getElementById('logoutNavButton');
    const switchModeButton = document.getElementById('switchModeButton');
    const authPrompt = document.getElementById('authPrompt');
    const confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
    const authForm = document.getElementById('authForm');
    const authHeading = document.getElementById('authHeading');
    const authDescription = document.getElementById('authDescription');
    const authMessage = document.getElementById('authMessage');
    const authEmail = document.getElementById('authEmail');
    const authPassword = document.getElementById('authPassword');
    const authConfirmPassword = document.getElementById('authConfirmPassword');
    const authSubmit = document.getElementById('authSubmit');

    const STORAGE_USER = 'tinythreadsUser';
    const STORAGE_USERS = 'tinythreadsUsers';
    let users = JSON.parse(localStorage.getItem(STORAGE_USERS) || '{}');
    let currentUser = JSON.parse(localStorage.getItem(STORAGE_USER) || 'null');
    let authMode = 'login';

    function showMessage(text, type){
        authMessage.textContent = text;
        authMessage.className = 'form-message';
        authMessage.classList.add(type === 'error' ? 'form-error' : 'form-success');
        authMessage.classList.remove('hidden');
    }

    function updateAuthUI(){
        if(currentUser){
            const userName = currentUser.name || currentUser.email.split('@')[0];
            authButton.querySelector('#authLabel').textContent = `Welcome, ${userName}`;
            authButton.setAttribute('aria-label', `Account menu for ${userName}`);
            authChevron.classList.remove('hidden');
        } else {
            const label = authMode === 'signup' ? 'Sign up' : 'Login';
            authButton.querySelector('#authLabel').textContent = label;
            authButton.setAttribute('aria-label', label);
            authChevron.classList.add('hidden');
        }
    }

    function toggleAuthMode(mode){
        authMode = mode;
        confirmPasswordLabel.classList.toggle('hidden', mode !== 'signup');
        authSubmit.textContent = mode === 'login' ? 'Login' : 'Create account';
        authHeading.textContent = mode === 'login' ? 'Login to your account' : 'Create a new account';
        authDescription.textContent = mode === 'login'
            ? 'Enter your credentials to log in.'
            : 'Sign up with your email and a secure password.';
        authPrompt.textContent = mode === 'login' ? "Don't have an account?" : 'Already have an account?';
        switchModeButton.textContent = mode === 'login' ? 'Sign up' : 'Login';
        updateAuthUI();
        authMessage.classList.add('hidden');
    }

    function saveState(){
        localStorage.setItem(STORAGE_USER, JSON.stringify(currentUser));
        localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
    }

    authButton.addEventListener('click', function(event){
        event.stopPropagation();
        if(currentUser){
            authMenu.classList.toggle('hidden');
            authButton.setAttribute('aria-expanded', authMenu.classList.contains('hidden') ? 'false' : 'true');
        } else {
            window.location.href = 'login.html';
        }
    });

    logoutNavButton.addEventListener('click', () => {
        currentUser = null;
        localStorage.setItem(STORAGE_USER, 'null');
        window.location.reload();
    });

    document.addEventListener('click', function(event){
        if(currentUser && !authMenu.classList.contains('hidden') && !event.target.closest('.auth-dropdown')){
            authMenu.classList.add('hidden');
            authButton.setAttribute('aria-expanded', 'false');
        }
    });

    switchModeButton.addEventListener('click', function(){
        toggleAuthMode(authMode === 'login' ? 'signup' : 'login');
    });

    authForm.addEventListener('submit', function(event){
        event.preventDefault();
        authMessage.classList.add('hidden');
        if(!authForm.checkValidity()){
            authForm.reportValidity();
            return;
        }
        const email = authEmail.value.trim().toLowerCase();
        const password = authPassword.value;
        const confirmPassword = authConfirmPassword.value;
        if(authMode === 'signup'){
            if(password !== confirmPassword){
                showMessage('Passwords do not match.', 'error');
                return;
            }
            if(users[email]){
                showMessage('An account with that email already exists.', 'error');
                return;
            }
            users[email] = { email, password, name: email.split('@')[0] };
            currentUser = users[email];
            saveState();
            window.location.href = 'index.html';
            return;
        }
        if(!users[email] || users[email].password !== password){
            showMessage('Email or password is incorrect.', 'error');
            return;
        }
        currentUser = users[email];
        saveState();
        window.location.href = 'index.html';
    });

    updateAuthUI();
    toggleAuthMode('login');
})();

(function(){
    const cartCount = document.getElementById('cartCount');
    const favoriteCount = document.getElementById('favoriteCount');
    const STORAGE_CART = 'tinythreadsCartByUser';
    const STORAGE_FAVORITES = 'tinythreadsFavoritesByUser';
    const currentUser = JSON.parse(localStorage.getItem('tinythreadsUser') || 'null');

    const cartMap = JSON.parse(localStorage.getItem(STORAGE_CART) || '{}');
    const cart = currentUser ? (cartMap[currentUser.email] || {}) : {};
    const cartTotal = Object.keys(cart).length;
    cartCount.textContent = cartTotal;
    cartCount.style.display = cartTotal ? 'inline-flex' : 'none';

    const favoriteMap = JSON.parse(localStorage.getItem(STORAGE_FAVORITES) || '{}');
    const favorites = currentUser ? (favoriteMap[currentUser.email] || {}) : {};
    const favTotal = Object.keys(favorites).length;
    favoriteCount.textContent = favTotal;
    favoriteCount.style.display = favTotal ? 'inline-flex' : 'none';
})();
