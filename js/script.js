// Top slider

let paginationBtn = document.querySelectorAll('.pagination-item span'); // кнопки
for (let i = 0; i < paginationBtn.length; i++) {
  let btnItem = paginationBtn[0];
  btnItem.classList.add('active');
}
let sliderBlocks = document.querySelectorAll('.slider-block'); // переключаемые блки
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

let servicesВutton = document.querySelectorAll('.services-button');
for (let i = 0; i < servicesВutton.length; i++) {
  let btnItem = servicesВutton[0];
  btnItem.classList.add('active');
}
let servicesBlocks = document.querySelectorAll('.services-slider--item');
let arryItems = [];
for (let i = 0; i < servicesBlocks.length; i++) {
  let slBlock = servicesBlocks[0];
  slBlock.classList.remove('visuallyHidden');
  let onCart = servicesBlocks[i];
  arryItems.push(onCart);
}

let toggleOnClickServices = function (itemBtn, onCart) {
  itemBtn.addEventListener('click', function (e) {
    let target = e.target;

    for (let i = 0; i < servicesВutton.length; i++) {
      let item = servicesВutton[i];
      item.classList.remove('active');
    }
    target.classList.add('active');
    for (let i = 0; i < servicesBlocks.length; i++) {
      let cart = servicesBlocks[i];
      cart.classList.add('visuallyHidden');
      cart.classList.remove('slider-show');
    }
    onCart.classList.remove('visuallyHidden');
    onCart.classList.add('slider-show');
  });
};
for (let i = 0; i < servicesВutton.length; i++) {
  let servicesВutton = document.querySelectorAll('.services-button');
  toggleOnClickServices(servicesВutton[i], arryItems[i]);
}