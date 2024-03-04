// Dummy product data (replace with your actual product data)
const products = [
  { name: "Product 1", price: 20 },
  { name: "Product 2", price: 30 },
  { name: "Product 3", price: 25 },
  { name: "Product 4", price: 15 },
  { name: "Product 5", price: 40 }
];

// Function to display products based on search query
function displayProducts(query) {
  const productSlider = document.querySelector('.product-slider');
  productSlider.innerHTML = '';

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  filteredProducts.forEach(product => {
    const productSlide = document.createElement('div');
    productSlide.classList.add('product-slide');

    productSlide.innerHTML = `
      <div class="product-image">
        <img src="product-placeholder.jpg" alt="${product.name}">
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">$${product.price}</div>
        <p>Description of ${product.name}</p>
      </div>
    `;

    productSlider.appendChild(productSlide);
  });
}

// Event listener for search input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function() {
  displayProducts(this.value);
});

// Initial display of products
displayProducts('');

function showDetails(productSlide) {
  const additionalInfo = productSlide.querySelector('.additional-info');
  additionalInfo.style.display = 'block';
}

function hideDetails(productSlide) {
  const additionalInfo = productSlide.querySelector('.additional-info');
  additionalInfo.style.display = 'none';
}
