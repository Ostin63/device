let modalOverlay = document.querySelector('.modal-overlay');
let modalEntry = document.querySelector('.modal-entry');
let entryButtons = document.querySelectorAll('.button-entry');
let modalCloseEntry = modalEntry.querySelector('.modal-close-entry');
let formEntry = modalEntry.querySelector('.entry-form');
let entryFields = formEntry.querySelectorAll('.entry-field');
let entryName = formEntry.querySelector('.entry-name');
let entryPassword = formEntry.querySelector('.entry-password');
let storageName = localStorage.getItem('name');
let storageMail = localStorage.getItem('email');
let staragePassword = localStorage.getItem('password');
let enterName = document.querySelector('.enter-name');
let enter = document.querySelector('.enter');

let onModalClose = function (evt) {
    evt.preventDefault();
    document.querySelector('.modal-show').classList.remove('modal-show');
    document.querySelector('.show-block').classList.remove('show-block');
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
    enter.classList.add('hover');
} else {
    enterName.textContent = '';
    enter.classList.remove('hover');
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
            }
        }
    });
};


$(".range-control").slider({
    min: 0,
    max: 5000,
    values: [0, 3000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".min-price").val(ui.values[ 0 ]);   
        $(".max-price").val(ui.values[ 1 ]);  
    }    
});
$(".min-price").val($(".range-control").slider("values", 0));
$(".max-price").val($(".range-control").slider("values", 1));
$(".range-filter input").change(function() {
    let input_left = $(".min-price").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".range-control").slider("option", "min"),
    where_right = $(".range-control").slider("values", 1),
    input_right = $(".max-price").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".range-control").slider("option", "max"),
    where_left = $(".range-control").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".min-price").val(input_left); 
    $(".max-price").val(input_right); 
    if (input_left != where_left) {
        $(".range-control").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".range-control").slider("values", 1, input_right);
    }
});