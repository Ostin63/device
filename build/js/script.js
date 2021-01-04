let contactsMap=document.querySelector(".contacts-map"),modalMap=document.querySelector(".modal-map"),mapClose=modalMap.querySelector(".map-close"),modalOverlay=document.querySelector(".modal-overlay"),modalEntry=document.querySelector(".modal-entry"),entryButtons=document.querySelectorAll(".button-entry .enter"),modalCloseEntry=modalEntry.querySelector(".modal-close-entry"),formEntry=modalEntry.querySelector(".entry-form"),entryFields=formEntry.querySelectorAll(".entry-field"),entryName=formEntry.querySelector(".entry-name"),entryPassword=formEntry.querySelector(".entry-password"),storageName=localStorage.getItem("name"),storageMail=localStorage.getItem("email"),staragePassword=localStorage.getItem("password"),enterName=document.querySelector(".enter-name"),enter=document.querySelector(".enter"),escapeButton=document.querySelector(".button-entry .escape"),onModalClose=function(e){e.preventDefault(),document.querySelector(".modal-show").classList.remove("modal-show"),document.querySelector(".show-block").classList.remove("show-block"),window.removeEventListener("keydown",onEscapePress)},onEscapePress=function(e){27===e.keyCode&&onModalClose(e)},isStorageSupport=!0,storage="";if(null!==storageName?(enterName.textContent=storageName,enter.classList.add("d-none"),escapeButton.classList.remove("d-none")):(enterName.textContent="",enter.classList.remove("none"),escapeButton.classList.add("d-none")),escapeButton.addEventListener("click",(function(){localStorage.removeItem("name")})),document.querySelector(".entry-form")){for(let e=0;e<entryButtons.length;e++){entryButtons[e].addEventListener("click",(function(e){e.preventDefault(),modalEntry.classList.add("modal-show"),modalOverlay.classList.add("show-block"),window.addEventListener("keydown",onEscapePress);try{storage=localStorage.getItem("storageMail")}catch(e){isStorageSupport=!1}storage?(entryName.value=storage,entryPassword.focus()):entryName.focus(),staragePassword&&(password.value=staragePassword)})),modalCloseEntry.addEventListener("click",onModalClose)}formEntry.addEventListener("submit",(function(e){for(let e=0;e<entryFields.length;e++){let t=entryFields[e];t.value?t.classList.remove("field-error"):(t.classList.add("field-error"),modalEntry.classList.add("modal-error"))}entryName.value&&password.value?isStorageSupport&&localStorage.setItem("name",entryName.value):(e.preventDefault(),modalEntry.classList.remove("modal-error"),modalEntry.classList.add("modal-error"))}))}if(contactsMap.addEventListener("click",(function(e){e.preventDefault(),modalMap.classList.add("modal-show"),modalOverlay.classList.add("show-block"),window.addEventListener("keydown",onEscapePress)})),mapClose.addEventListener("click",onModalClose),document.querySelector("#modal-feedback")){let e=document.querySelector(".contacts-btn"),t=document.querySelector("#modal-feedback"),o=t.querySelector(".modal-close"),s=t.querySelector(".feedback-form"),l=t.querySelector("[name=fullname]"),r=t.querySelector("[name=email]");try{storage=localStorage.getItem("fullname")}catch(e){isStorageSupport=!1}e.addEventListener("click",(function(e){e.preventDefault(),t.classList.add("modal-show"),modalOverlay.classList.add("show-block"),window.addEventListener("keydown",onEscapePress),storage?(l.value=storage,r.focus()):l.focus()})),o.addEventListener("click",(function(e){e.preventDefault(),t.classList.remove("modal-show"),t.classList.remove("modal-error"),modalOverlay.classList.remove("show-block")}));let a=s.querySelectorAll(".field");s.addEventListener("submit",(function(e){for(var t=0;t<a.length;t++){let e=a[t];e.value?e.classList.remove("field-error"):e.classList.add("field-error")}isStorageSupport&&localStorage.setItem("fullname",l.value)}))}let paginationBtn=document.querySelectorAll(".item span");for(let e=0;e<paginationBtn.length;e++){paginationBtn[0].classList.add("active")}let sliderBlocks=document.querySelectorAll(".slider-block");for(let e=0;e<sliderBlocks.length;e++){sliderBlocks[0].classList.remove("visually-hidden")}let arrowLeft=document.querySelector(".arrow-leht"),arrowRight=document.querySelector(".arrow-right");arrowRight.addEventListener("click",(function(){onCart<sliderBlocks.length&&onCart++}));let toggleOnClick=function(e,t){e.addEventListener("click",(function(e){let o=e.target;for(let e=0;e<paginationBtn.length;e++){paginationBtn[e].classList.remove("active")}o.classList.add("active");for(let e=0;e<sliderBlocks.length;e++){let t=sliderBlocks[e];t.classList.add("visually-hidden"),t.classList.remove("slider-show")}t.classList.remove("visually-hidden"),t.classList.add("slider-show")}))};for(let e=0;e<paginationBtn.length;e++)toggleOnClick(paginationBtn[e],sliderBlocks[e]);let servicesВutton=document.querySelectorAll("li.services-button");for(let e=0;e<servicesВutton.length;e++){servicesВutton[0].classList.add("act")}let servicesBlocks=document.querySelectorAll(".services-slider--item");for(let e=0;e<servicesBlocks.length;e++){servicesBlocks[0].classList.remove("visually-hidden")}let toggleOnClickServices=function(e,t){e.addEventListener("click",(function(){for(let e=0;e<servicesВutton.length;e++){servicesВutton[e].classList.remove("act")}e.classList.add("act");for(let e=0;e<servicesBlocks.length;e++){let t=servicesBlocks[e];t.classList.add("visually-hidden"),t.classList.remove("slider-show")}t.classList.remove("visually-hidden"),t.classList.add("slider-show")}))};for(let e=0;e<servicesВutton.length;e++)toggleOnClickServices(servicesВutton[e],servicesBlocks[e]);