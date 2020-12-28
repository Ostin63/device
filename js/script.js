// Top slider

let paginationBtn = document.querySelectorAll('.pagination-item span');
for (let i = 0; i < paginationBtn.length; i++) {
  let btnItem = paginationBtn[0];
  btnItem.classList.add('active');
}
let sliderBlocks = document.querySelectorAll('.slider-block');
let arryCarts = [];
for (let i = 0; i < sliderBlocks.length; i++){
  let slBlock = sliderBlocks[0];
  slBlock.classList.remove('visuallyHidden');
  let onCart = sliderBlocks[i];
  arryCarts.push(onCart);
}

let toggleOnClick = function (itemBtn, onCart) {
  itemBtn.addEventListener('click', function (e) {
    let target = e.target;

    for (let i = 0; i < paginationBtn.length; i++) {
      let item = paginationBtn[i];
      item.classList.remove('active');
    }
    target.classList.add('active');
    for (let i = 0; i < sliderBlocks.length; i++){
      let cart = sliderBlocks[i];
      cart.classList.add('visuallyHidden');
      cart.classList.remove('slider-show');
    }
    onCart.classList.remove('visuallyHidden');
    onCart.classList.add('slider-show');
  });
};
for (let i = 0; i < paginationBtn.length; i++){
  let paginationBtn = document.querySelectorAll('.pagination-item span');
  toggleOnClick(paginationBtn[i], arryCarts[i]);
}

// Services slider

let paginationBtn = document.querySelectorAll('.pagination-item span');
for (let i = 0; i < paginationBtn.length; i++) {
  let btnItem = paginationBtn[0];
  btnItem.classList.add('active');
}
let sliderBlocks = document.querySelectorAll('.slider-block');
let arryCarts = [];
for (let i = 0; i < sliderBlocks.length; i++) {
  let slBlock = sliderBlocks[0];
  slBlock.classList.remove('visuallyHidden');
  let onCart = sliderBlocks[i];
  arryCarts.push(onCart);
}

let toggleOnClick = function (itemBtn, onCart) {
  itemBtn.addEventListener('click', function (e) {
    let target = e.target;

    for (let i = 0; i < paginationBtn.length; i++) {
      let item = paginationBtn[i];
      item.classList.remove('active');
    }
    target.classList.add('active');
    for (let i = 0; i < sliderBlocks.length; i++) {
      let cart = sliderBlocks[i];
      cart.classList.add('visuallyHidden');
      cart.classList.remove('slider-show');
    }
    onCart.classList.remove('visuallyHidden');
    onCart.classList.add('slider-show');
  });
};
for (let i = 0; i < paginationBtn.length; i++) {
  let paginationBtn = document.querySelectorAll('.pagination-item span');
  toggleOnClick(paginationBtn[i], arryCarts[i]);
}