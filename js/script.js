let paginationBtn = document.querySelectorAll('.pagination-item span');
for (let i = 0; i < paginationBtn.length; i++) {
  let btnItem = paginationBtn[0];
  btnItem.classList.add('active');
}
let sliderBlocks = document.querySelectorAll('.slider-block');
let arryCarts = [];
for (let i = 0; i < sliderBlocks.length; i++){
  let slBlock = sliderBlocks[0];
  slBlock.classList.add('block');
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
      cart.classList.remove('block')
    }
    onCart.classList.add('block')
  });
};
for (let i = 0; i < paginationBtn.length; i++){
  let paginationBtn = document.querySelectorAll('.pagination-item span');
  toggleOnClick(paginationBtn[i], arryCarts[i]);
}