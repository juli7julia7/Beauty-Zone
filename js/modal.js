const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalIsHidden = document.querySelector('.modal-is-hidden');
const modalBtnClose = document.querySelector('.modal-btn-close');


modalBtnOpen.addEventListener("click", () =>{
    modalIsHidden.classList.add('active');
});

modalBtnClose.addEventListener("click", ()=>{
    modalIsHidden.classList.remove("active")
});




// modalBtnClose.addEventListener("click", () =>{
//     blockOpacity.classList.remove('.blockOpacity-active');
// })