const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

// Vérifie la disponibilité de sessionStorage
function checkSessionStorageSupport() {
  try {
    const testKey = '__test__';
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

// Ajouter un article au panier (dans sessionStorage)
function addItemToCart(item) {
  sessionStorage.setItem(item, 'true');
}

// Créer et afficher la liste des articles disponibles
function createStore() {
  const ul = document.createElement('ul');

  availableItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.style.cursor = 'pointer';

    li.addEventListener('click', () => {
      addItemToCart(item);
    });

    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

// Afficher le nombre d'articles précédemment ajoutés au panier
function displayCart() {
  const storedItems = Object.keys(sessionStorage).filter(key => availableItems.includes(key));
  if (storedItems.length === 0) return;

  const p = document.createElement('p');
  p.textContent = `You previously had ${storedItems.length} item${storedItems.length > 1 ? 's' : ''} in your cart`;
  document.body.appendChild(p);
}

// Initialisation après chargement
document.addEventListener('DOMContentLoaded', () => {
  if (!checkSessionStorageSupport()) {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
    return;
  }

  createStore();
  displayCart();
});
