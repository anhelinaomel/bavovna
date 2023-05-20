const itemsPerPage = 8;
let currentPage = 1;
const products = JSON.parse(localStorage.getItem('products'));

function renderProductItems(startIndex, endIndex) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];

        const anchorElement = document.createElement('a');
        anchorElement.href = `product.html?id=${product.id}`;
        anchorElement.classList.add('align-description');
        anchorElement.classList.add('product-link');
        anchorElement.classList.add('product-item');

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="assets/products/${product.images[0]}" alt="${product.name}">
            <div class="align-description">
                <h3 class="name">${product.name}</h3>
                <p class="price">$${product.price}</p>
                </div>
                `;
                anchorElement.appendChild(productItem);
                productContainer.appendChild(anchorElement);
            }
            
        }
        // <p class="description">${product.description}</p>

function updatePaginationButtons() {
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    if (currentPage === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage === totalPages) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
    document.body.style.overflow = 'auto';
}

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        disableScrolling();
        renderProductItems((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        updatePaginationButtons();
        scrollToTop();
        enableScrolling();
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        let remainingOnPage = 0;
        if (currentPage === totalPages) {
            remainingOnPage = ((currentPage - 1) * itemsPerPage) + (products.length % itemsPerPage);
        } else {
            remainingOnPage = currentPage * itemsPerPage;
        }
        disableScrolling();
        renderProductItems((currentPage - 1) * itemsPerPage, remainingOnPage);
        updatePaginationButtons();
        scrollToTop();
        enableScrolling();
    }
}

// Initial render
renderProductItems(0, itemsPerPage);
updatePaginationButtons();

// Add event listeners to pagination buttons
document.getElementById('prev-btn').addEventListener('click', goToPreviousPage);
document.getElementById('next-btn').addEventListener('click', goToNextPage);
