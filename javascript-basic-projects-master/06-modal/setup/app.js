// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalBTN = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const closeBTN = document.querySelector(".close-btn");
modalBTN.addEventListener("click", function(){
    overlay.classList.toggle("open-modal");
})
closeBTN.addEventListener("click", function(){
    overlay.classList.remove("open-modal");
})