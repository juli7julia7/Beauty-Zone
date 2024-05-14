const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalIsHidden = document.querySelector('.modal-is-hidden');
const modalBtnClose = document.querySelector('.modal-btn-close');
const formModalButton = document.querySelector('.form-modal__button-big');


modalBtnOpen.addEventListener("click", () => {
    modalIsHidden.classList.add('active');
});

formModalButton.addEventListener("click", (e) => {
    e.preventDefault();
});
formModalButton.addEventListener("click", ()=>{
    modalIsHidden.classList.remove("active")
})
modalBtnClose.addEventListener("click", () => {
    modalIsHidden.classList.remove("active")
});




// modalBtnClose.addEventListener("click", () =>{
//     blockOpacity.classList.remove('.blockOpacity-active');
// })