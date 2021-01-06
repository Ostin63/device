let contactsMap = document.querySelector('.contacts-map');
let modalMap = document.querySelector('.modal-map');
let mapClose = modalMap.querySelector('.map-close');
let modalOverlay = document.querySelector('.modal-overlay');
let modalEntry = document.querySelector('.modal-entry');
let entryButtons = document.querySelectorAll('.button-entry .enter');
let modalCloseEntry = modalEntry.querySelector('.modal-close-entry');
let formEntry = modalEntry.querySelector('.entry-form');
let entryFields = formEntry.querySelectorAll('.entry-field');
let entryName = formEntry.querySelector('.entry-name');
let entryPassword = formEntry.querySelector('.entry-password');
let storageName = localStorage.getItem('name');
let storageMail = localStorage.getItem('email');
let staragePassword = localStorage.getItem('password');
let enterName = document.querySelector('.enter-name');
let escapeButtons = document.querySelectorAll('.button-entry .escape');

let onModalClose = function (evt) {
  evt.preventDefault();
  document.querySelector('.modal-show').classList.remove('modal-show');
  modalOverlay.classList.remove('show-block');
  window.removeEventListener('keydown', onEscapePress);
};

let onEscapePress = function (evt) {
  if (evt.keyCode === 27) {
    onModalClose(evt);
  }
};

let isStorageSupport = true;
let storage = '';



if (storageName !== null) {
  enterName.textContent = storageName;

  for (i = 0; i < entryButtons.length; i++) {
    let entryButton = entryButtons[i];
    entryButton.classList.add('d-none');
  }
  for (let i = 0; i < escapeButtons.length; i++) {
    let escapeButton = escapeButtons[i];
    escapeButton.classList.remove('d-none');
  }
} else {
  enterName.textContent = '';
  for (i = 0; i < entryButtons.length; i++) {
    let entryButton = entryButtons[i];
    entryButton.classList.remove('d-none');
  }
  for (let i = 0; i < escapeButtons.length; i++) {
    let escapeButton = escapeButtons[i];
    escapeButton.classList.add('d-none');
  }
}
for (let i = 0; i < escapeButtons.length; i++) {
  let escapeButton = escapeButtons[i];
  escapeButton.addEventListener('click', function () {
    localStorage.removeItem('name');
    location.reload();
  });
}

if (document.querySelector('.entry-form')) {
  for (let i = 0; i < entryButtons.length; i++) {
    let entryButton = entryButtons[i];
    entryButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalEntry.classList.add('modal-show');
      modalOverlay.classList.add('show-block');
      window.addEventListener('keydown', onEscapePress);

      try {
        storage = localStorage.getItem('storageMail');
      } catch (err) {
        isStorageSupport = false;
      }

      if (storage) {
        entryName.value = storage;
        entryPassword.focus();

      } else {
        entryName.focus();
      }
      if (staragePassword) {
        password.value = staragePassword
      }
    });
    modalCloseEntry.addEventListener('click', onModalClose);
  };

  formEntry.addEventListener('submit', function (evt) {

    for (let i = 0; i < entryFields.length; i++) {
      let entryField = entryFields[i];
      if (!entryField.value) {
        entryField.classList.add('field-error');
        modalEntry.classList.add('modal-error');
      } else {
        entryField.classList.remove('field-error');
      }
    };
    if (!entryName.value || !password.value) {
      evt.preventDefault();
      modalEntry.classList.remove('modal-error');
      modalEntry.classList.add('modal-error');

    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', entryName.value);
        location.reload();
      }
    }
  });
};

// Map

contactsMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
  modalOverlay.classList.add('show-block');
  window.addEventListener('keydown', onEscapePress);
});

mapClose.addEventListener('click', onModalClose);



if (document.querySelector('#modal-feedback')) {
  let link = document.querySelector('.contacts-btn');

  let modalFeedback = document.querySelector('#modal-feedback');
  let close = modalFeedback.querySelector('.modal-close');

  let feedbackForm = modalFeedback.querySelector('.feedback-form');
  let fullname = modalFeedback.querySelector('[name=fullname]');
  let email = modalFeedback.querySelector('[name=email]');

  try {
    storage = localStorage.getItem('fullname');
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add('modal-show');
    modalOverlay.classList.add('show-block');
    window.addEventListener('keydown', onEscapePress);

    if (storage) {
      fullname.value = storage;
      email.focus();
    } else {
      fullname.focus();
    }
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-show', 'modal-error');
    modalOverlay.classList.remove('show-block');
  });
  let fields = feedbackForm.querySelectorAll('.field')
  feedbackForm.addEventListener('submit', function (evt) {
    for (var i = 0; i < fields.length; i++) {
      let field = fields[i];
      if (!field.value) {
        field.classList.add('field-error');
      } else {
        field.classList.remove('field-error');
      }
    }
    if (isStorageSupport) {
      localStorage.setItem('fullname', fullname.value);
    }

  });
}

// Top slider

let paginationBtns = document.querySelectorAll('.item span'); // кнопки
for (let i = 0; i < paginationBtns.length; i++) {
  let btnItem = paginationBtns[0];
  btnItem.classList.add('active');
}
let sliderBlocks = document.querySelectorAll('.slider-block'); // переключаемые блоки

for (let i = 0; i < sliderBlocks.length; i++) {
  let sliderBlock = sliderBlocks[0];
  sliderBlock.classList.add('show-block');
};

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');



let toggleOnClick = function (itemBtn, onCart) {
  let currentSlide = 0;
  function goToSlide(n) {
    sliderBlocks[currentSlide].classList.remove('show-block', 'slider-show');
    paginationBtns[currentSlide].classList.remove('active');
    currentSlide = (n + sliderBlocks.length) % sliderBlocks.length;
    sliderBlocks[currentSlide].classList.add('show-block', 'slider-show');
    paginationBtns[currentSlide].classList.add('active');
  }

  arrowRight.addEventListener('click', function () {
    goToSlide(currentSlide + 1);
  });

  arrowLeft.addEventListener('click', function () {
    goToSlide(currentSlide - 1);
  });

  itemBtn.addEventListener('click', function (e) {
    let target = e.target;

    for (let i = 0; i < paginationBtns.length; i++) {
      let item = paginationBtns[i];
      item.classList.remove('active');
    }
    target.classList.add('active');
    for (let i = 0; i < sliderBlocks.length; i++) {
      let cart = sliderBlocks[i];
      cart.classList.remove('show-block', 'slider-show');
    }
    onCart.classList.add('show-block', 'slider-show');
  });
};
for (let i = 0; i < paginationBtns.length; i++) {
  toggleOnClick(paginationBtns[i], sliderBlocks[i]);
}

// Services slider

let servicesВuttons = document.querySelectorAll('li.services-button');
for (let i = 0; i < servicesВuttons.length; i++) {
  let btnItem = servicesВuttons[0];
  btnItem.classList.add('act');
}

let servicesBlocks = document.querySelectorAll('.services-slider--item');

for (let i = 0; i < servicesBlocks.length; i++) {
  let sliderBlock = servicesBlocks[0];
  sliderBlock.classList.remove('visually-hidden');
}

let toggleOnClickServices = function (itemBtn, onCart) {
  itemBtn.addEventListener('click', function () {

    for (let i = 0; i < servicesВuttons.length; i++) {
      let item = servicesВuttons[i];
      item.classList.remove('act');
    }
    itemBtn.classList.add('act');
    for (let i = 0; i < servicesBlocks.length; i++) {
      let cart = servicesBlocks[i];
      cart.classList.add('visually-hidden');
      cart.classList.remove('slider-show');
    }
    onCart.classList.remove('visually-hidden');
    onCart.classList.add('slider-show');
  });
};
for (let i = 0; i < servicesВuttons.length; i++) {
  toggleOnClickServices(servicesВuttons[i], servicesBlocks[i]);
}