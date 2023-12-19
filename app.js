const amountDisplayEl = document.querySelector("#amount-value");
const cartEl = document.querySelector("#cart-container");
const imgFocus = document.querySelector("#img-focus");
const imgFocusLightbox = document.querySelector("#img-focus-lightbox");
const lightbox = document.querySelector("#lightbox-container");
const thumbnails = document.querySelectorAll(".thumbnail");
const thumbnailsLightbox = document.querySelectorAll(".thumbnail-lightbox");
const msgEmpty = document.querySelector("#empty");
const itemCart = document.querySelector("#cart-body");
const itemAmount = document.querySelector("#item-amount");
const finalPriceEl = document.querySelector("#final-price");
const cartNotification = document.querySelector("#cart-notification");
const addBtn = document.querySelector("#add-btn");

const price = 125;
let amountCart = 0;
let condition = 0;
let images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

function checkProductsQuantity() {
  const quantity = +amountDisplayEl.textContent;

  if (quantity <= 0) {
    addBtn.disabled = true;
    addBtn.style = "opacity: 40%; cursor: default;";
    return;
  }
  addBtn.disabled = false;
  addBtn.style = "opacity: 100%; cursor: pointer;";
}

function reduceAmount() {
  if (amountDisplayEl.textContent == 0) {
    return;
  }
  amountDisplayEl.textContent--;
  checkProductsQuantity();
}

function increaseAmount() {
  if (amountDisplayEl == 999) {
    return;
  }
  amountDisplayEl.textContent++;
  checkProductsQuantity();
}

function toggleCart() {
  cartEl.classList.toggle("aberto");
}

function openLightbox() {
  lightbox.style = "display: flex !important";
}

function closeLightbox() {
  lightbox.style = "display: none";
}

function changePreviewImg(imgClicked) {
  condition = imgClicked;
  imgFocus.src = images[imgClicked];
  imgFocusLightbox.src = images[imgClicked];
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("selected");
  }
  for (i = 0; i < thumbnailsLightbox.length; i++) {
    thumbnailsLightbox[i].classList.remove("selected-lightbox");
  }
  const elementClicked = thumbnails[imgClicked];
  const elementClickedLightbox = thumbnailsLightbox[imgClicked];
  console.log(elementClickedLightbox);
  elementClicked.classList.add("selected");
  elementClickedLightbox.classList.add("selected-lightbox");
}

function nextImg() {
  condition++;
  if (condition == 4) {
    condition = 0;
  }
  changePreviewImg(condition);
}

function backImg() {
  condition--;
  if (condition == -1) {
    condition = 3;
  }
  changePreviewImg(condition);
}

function addToCart() {
  if (!+amountDisplayEl.textContent)
    return alert("You cannot select 0 products");

  amountCart = amountCart + +amountDisplayEl.textContent;
  cartNotification.style = "display: flex";
  cartNotification.textContent = amountCart;
  amountDisplayEl.textContent = 0;
  msgEmpty.style = "display: none";
  itemCart.style = "display: flex !important";
  itemAmount.textContent = amountCart;
  finalPriceEl.textContent = `$${price * amountCart}.00`;

  checkProductsQuantity();
}

function deleteItem() {
  amountCart = 0;
  cartNotification.style = "display: none";
  itemCart.style = "display: none";
  msgEmpty.style = "display: block";
}
