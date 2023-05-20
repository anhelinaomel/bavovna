// Dynamically switch product images
// Retrieve the product id from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Retrieve the product data from LocalStorage based on the id
const prodData = JSON.parse(localStorage.getItem('products'));
const product = prodData.find(item => item.id === parseInt(productId));

// Get the slideshow container element
const slideshowContainer = document.querySelector('.slideshow-container');

// Generate the HTML for the slideshow slides dynamically
let slideHTML = '';

product.images.forEach((image, index) => {
  const slideNumber = index + 1;
  slideHTML += `
    <div class="mySlides fade">
      <div class="numbertext">${slideNumber} / ${product.images.length}</div>
      <img src="assets/products/${image}" style="width:100%">
    </div>
  `;
});

// Prepend the generated HTML at the beginning of the slideshow container
slideshowContainer.insertAdjacentHTML('afterbegin', slideHTML);

// Update the image sources after the HTML has been added to the DOM
const slideImages = slideshowContainer.querySelectorAll('.mySlides img');

slideImages.forEach((img, index) => {
  img.src = `assets/products/${product.images[index]}`;
});

let slideIndex = 1;

// Get the dot container element
const dotContainer = document.querySelector('.dot-container');

// Fetch the size from the database (replace this with your own logic to fetch the size)
const sizeFromDatabase = product.images.length;

// Generate the dots based on the size
for (let i = 1; i <= sizeFromDatabase; i++) {
  // Create a new dot element
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.setAttribute('onclick', `currentSlide(${i})`);

  console.log("dot", dot)
  // Append the dot to the dot container
  dotContainer.appendChild(dot);
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Get the product name and description elements
const productName = document.querySelector('.product-name');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');

// Update the product name and description with the retrieved data
productName.textContent = product.name;
productDescription.textContent = product.description;
productPrice.textContent = '$' + product.price;
