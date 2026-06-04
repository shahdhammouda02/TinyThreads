const items = {
  "kids-sneakers": {
    name: "Kids Sneakers",
    category: "Shoes",
    price: 34.99,
    description: "Bright, cushioned sneakers for all-day play.",
    image: "https://images.pexels.com/photos/4987534/pexels-photo-4987534.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    ages: ["1 year", "1-2 years", "2 years", "2-3 years", "3-4 years", "4-5 years", "5-6 years"],
    heights: ["28-30 in", "30-32 in", "32-35 in", "35-37 in", "37-39 in", "39-42 in", "42-44 in"],
    weights: ["20-22 lbs", "22-25 lbs", "25-28 lbs", "28-31 lbs", "31-35 lbs", "35-39 lbs", "39-44 lbs"],
  },
  "denim-jacket": {
    name: "Denim Jacket",
    category: "Jackets",
    price: 44.99,
    description: "A classic denim jacket with just enough stretch for everyday adventures.",
    image: "https://images.pexels.com/photos/3934038/pexels-photo-3934038.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["2T", "3T", "4T", "5", "6"],
    ages: ["2 years", "3 years", "4 years", "5 years", "6 years"],
    heights: ["33-36 in", "36-39 in", "39-42 in", "42-45 in", "45-48 in"],
    weights: ["26-30 lbs", "30-34 lbs", "34-38 lbs", "38-42 lbs", "42-46 lbs"],
  },
  "graphic-tee": {
    name: "Graphic Tee",
    category: "Playwear",
    price: 18.99,
    description: "Soft cotton tee with playful print and a relaxed fit.",
    image: "https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["18M", "2T", "3T", "4T", "5", "6"],
    ages: ["1 year", "2 years", "3 years", "4 years", "5 years", "6 years"],
    heights: ["28-31 in", "31-34 in", "34-37 in", "37-40 in", "40-43 in", "43-46 in"],
    weights: ["20-24 lbs", "24-28 lbs", "28-32 lbs", "32-36 lbs", "36-41 lbs", "41-46 lbs"],
  },
  "play-hoodie": {
    name: "Play Hoodie",
    category: "Playwear",
    price: 26.99,
    description: "Cozy hoodie made to move with soft cotton and bold color.",
    image: "https://images.pexels.com/photos/11286070/pexels-photo-11286070.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["2T", "3T", "4T", "5", "6"],
    ages: ["2 years", "3 years", "4 years", "5 years", "6 years"],
    heights: ["33-36 in", "36-39 in", "39-42 in", "42-45 in", "45-48 in"],
    weights: ["26-30 lbs", "30-34 lbs", "34-38 lbs", "38-42 lbs", "42-46 lbs"],
  },
  "stretch-jeans": {
    name: "Stretch Jeans",
    category: "Jeans",
    price: 32.99,
    description: "Flexible denim made for running, jumping, and play.",
    image: "https://images.pexels.com/photos/17839401/pexels-photo-17839401.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    ages: ["2 years", "3 years", "4 years", "5 years", "6 years"],
    heights: ["34-37 in", "37-40 in", "40-43 in", "43-46 in", "46-49 in", "49-52 in"],
    weights: ["25-29 lbs", "29-33 lbs", "33-37 lbs", "37-41 lbs", "41-46 lbs", "46-50 lbs"],
  },
  "soft-jeans": {
    name: "Soft Jeans",
    category: "Jeans",
    price: 29.99,
    description: "Gentle denim with stretch for everyday wear.",
    image: "https://images.pexels.com/photos/8544384/pexels-photo-8544384.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    ages: ["2 years", "3 years", "4 years", "5 years", "6 years"],
    heights: ["34-37 in", "37-40 in", "40-43 in", "43-46 in", "46-49 in", "49-52 in"],
    weights: ["25-29 lbs", "29-33 lbs", "33-37 lbs", "37-41 lbs", "41-46 lbs", "46-50 lbs"],
  },
  "puffer-jacket": {
    name: "Puffer Jacket",
    category: "Jackets",
    price: 49.99,
    description: "Soft quilted jacket for extra warmth and cozy layering.",
    image: "https://images.pexels.com/photos/7375307/pexels-photo-7375307.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["2T", "3T", "4T", "5", "6"],
    ages: ["2 years", "3 years", "4 years", "5 years", "6 years"],
    heights: ["33-36 in", "36-39 in", "39-42 in", "42-45 in", "45-48 in"],
    weights: ["26-30 lbs", "30-34 lbs", "34-38 lbs", "38-42 lbs", "42-46 lbs"],
  },
  "rain-jacket": {
    name: "Rain Jacket",
    category: "Jackets",
    price: 42.99,
    description: "Lightweight, splash-proof jacket for damp weather fun.",
    image: "https://images.pexels.com/photos/14753791/pexels-photo-14753791.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["2T", "3T", "4T", "5", "6"],
    ages: ["2 years", "3 years", "4 years", "5 years", "6 years"],
    heights: ["33-36 in", "36-39 in", "39-42 in", "42-45 in", "45-48 in"],
    weights: ["26-30 lbs", "30-34 lbs", "34-38 lbs", "38-42 lbs", "42-46 lbs"],
  },
  "high-top-sneakers": {
    name: "High-Top Sneakers",
    category: "Shoes",
    price: 38.99,
    description: "Bold sneakers with padded ankle support for extra comfort.",
    image: "https://images.pexels.com/photos/33335315/pexels-photo-33335315.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["6", "7", "8", "9", "10", "11"],
    ages: ["3 years", "4 years", "5 years", "6 years"],
    heights: ["37-40 in", "40-43 in", "43-46 in", "46-49 in"],
    weights: ["30-34 lbs", "34-38 lbs", "38-42 lbs", "42-46 lbs"],
  },
  "slip-on-shoes": {
    name: "Slip-On Shoes",
    category: "Shoes",
    price: 31.49,
    description: "Easy on/off shoes with a soft cushioned sole.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["5", "6", "7", "8", "9", "10"],
    ages: ["2 years", "3 years", "4 years", "5 years"],
    heights: ["32-35 in", "35-38 in", "38-41 in", "41-44 in"],
    weights: ["24-28 lbs", "28-32 lbs", "32-36 lbs", "36-40 lbs"],
  },
  "sport-shoes": {
    name: "Sport Shoes",
    category: "Shoes",
    price: 36.99,
    description: "Sporty shoes built for outdoor play and running around.",
    image: "https://images.pexels.com/photos/29699313/pexels-photo-29699313.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["6", "7", "8", "9", "10", "11"],
    ages: ["3 years", "4 years", "5 years", "6 years"],
    heights: ["37-40 in", "40-43 in", "43-46 in", "46-49 in"],
    weights: ["30-34 lbs", "34-38 lbs", "38-42 lbs", "42-46 lbs"],
  },
  "denim-shorts": {
    name: "Denim Shorts",
    category: "Jeans",
    price: 27.99,
    description: "Cool and easy denim shorts for warm days and playtime.",
    image: "https://images.pexels.com/photos/16420016/pexels-photo-16420016.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sizes: ["4", "5", "6", "7", "8"],
    ages: ["3 years", "4 years", "5 years", "6 years"],
    heights: ["36-39 in", "39-42 in", "42-45 in", "45-48 in"],
    weights: ["30-34 lbs", "34-38 lbs", "38-42 lbs", "42-46 lbs"],
  }
};

function getQueryValue(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const detailContent = document.getElementById("detailContent");
const itemId = getQueryValue("id");
const imageOverride = getQueryValue("image");
const item = items[itemId];
const STORAGE_USER = "tinythreadsUser";
const STORAGE_CART = "tinythreadsCartByUser";
const STORAGE_FAVORITES = "tinythreadsFavoritesByUser";
const STORAGE_USERS = "tinythreadsUsers";

let currentUser = JSON.parse(localStorage.getItem(STORAGE_USER) || "null");
let cartMap = JSON.parse(localStorage.getItem(STORAGE_CART) || '{}');
let favoriteMap = JSON.parse(localStorage.getItem(STORAGE_FAVORITES) || '{}');
let cart = currentUser ? (cartMap[currentUser.email] || {}) : {};
let favorites = currentUser ? (favoriteMap[currentUser.email] || {}) : {};
let users = JSON.parse(localStorage.getItem(STORAGE_USERS) || '{}');

function saveState() {
  if (currentUser) {
    cartMap[currentUser.email] = cart;
    favoriteMap[currentUser.email] = favorites;
  }
  localStorage.setItem(STORAGE_USER, JSON.stringify(currentUser));
  localStorage.setItem(STORAGE_CART, JSON.stringify(cartMap));
  localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favoriteMap));
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function formatMoney(value) {
  return '$' + Number(value).toFixed(2);
}

function refreshCartButton() {
  const addToCartButton = document.getElementById('addToCartButton');
  if (!addToCartButton) return;
  const isInCart = cart[item.name] && cart[item.name].quantity > 0;
  addToCartButton.textContent = isInCart ? 'Added' : 'Add to Cart';
  addToCartButton.disabled = isInCart;
}

function updateFavoriteCount() {
  const favoriteCount = document.getElementById('favoriteCount');
  if (!favoriteCount) return;
  const total = Object.keys(favorites).length;
  favoriteCount.textContent = total;
  favoriteCount.style.display = total ? 'inline-flex' : 'none';
}

function renderNotFound() {
  if (!detailContent) return;
  detailContent.innerHTML = '<p>Product not found. Please return to the collections page.</p>';
}

function getFieldLabel(key) {
  switch (key) {
    case 'sizes': return 'Size';
    case 'ages': return 'Age';
    case 'heights': return 'Height';
    case 'weights': return 'Weight';
    default: return 'Option';
  }
}

function getSummaryLabel(key) {
  switch (key) {
    case 'sizes': return 'Available sizes';
    case 'ages': return 'Recommended ages';
    case 'heights': return 'Height range';
    case 'weights': return 'Weight range';
    default: return key;
  }
}

function getFieldOrder() {
  return ['sizes', 'ages', 'heights', 'weights'];
}

function renderDetail() {
  if (!detailContent || !item) return;

  const summaryHtml = getFieldOrder().map((key) =>
    `<div><strong>${getSummaryLabel(key)}:</strong> ${item[key].join(', ')}</div>`
  ).join('');

  const fieldSelectors = getFieldOrder().map((key) => {
    const options = item[key].map((value) => `<option value="${value}">${value}</option>`).join('');
    return `
      <div class="detail-meta">
        <label for="${key}Select">${getFieldLabel(key)}</label>
        <select id="${key}Select" data-attr="${key}">${options}</select>
      </div>`;
  }).join('');

  const detailImageSrc = imageOverride || item.image;
  detailContent.innerHTML = `
    <div class="detail-hero">
      <div class="detail-image">
        <img src="${detailImageSrc}" alt="${item.name}">
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
        ${fieldSelectors}
        <div class="detail-actions">
          <button id="addToCartButton" class="btn btn-primary" type="button">Add to Cart</button>
          <button id="favoriteDetailButton" class="btn btn-outline" type="button">Save to Favorites</button>
        </div>
        <div id="detailMessage" class="small" style="margin-top:12px;color:#334155"></div>
        <div class="section-footer">
          <a href="collections.html" class="btn btn-outline">Back to collections</a>
          <a href="index.html" class="btn btn-primary">Home</a>
        </div>
      </div>
    </div>`;

  const addToCartButton = document.getElementById('addToCartButton');
  const favoriteDetailButton = document.getElementById('favoriteDetailButton');
  const message = document.getElementById('detailMessage');

  function refreshMessage(text) {
    if (message) message.textContent = text;
  }

  refreshCartButton();

  addToCartButton.addEventListener('click', function () {
    if (!currentUser) {
      window.location.href = 'login.html';
      return;
    }

    const selects = Array.from(document.querySelectorAll('select[data-attr]'));
    const selections = selects.reduce((acc, select) => {
      acc[select.dataset.attr] = select.value;
      return acc;
    }, {});

    const cartKey = item.name;
    if (cart[cartKey]) {
      cart[cartKey] = { ...cart[cartKey], ...selections };
    } else {
      cart[cartKey] = {
        name: item.name,
        price: item.price,
        quantity: 1,
        ...selections,
      };
    }

    saveState();
    refreshCartButton();
    refreshMessage('Added to cart with selected options.');
  });

  favoriteDetailButton.addEventListener('click', function () {
    if (!currentUser) {
      window.location.href = 'login.html';
      return;
    }
    if (favorites[item.name]) {
      delete favorites[item.name];
      favoriteDetailButton.textContent = 'Save to Favorites';
      refreshMessage('Removed from favorites.');
    } else {
      favorites[item.name] = { name: item.name, price: item.price };
      favoriteDetailButton.textContent = 'Saved';
      refreshMessage('Saved to favorites.');
    }
    saveState();
    updateFavoriteCount();
  });

  if (currentUser && favorites[item.name]) {
    favoriteDetailButton.textContent = 'Saved';
  }
}

if (!item) {
  renderNotFound();
} else {
  renderDetail();
}
