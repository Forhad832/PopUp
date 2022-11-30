let onScrollPopup = document.querySelector('.onscrollPopup');
window.addEventListener('scroll', function () {
  
    let scrollY = this.window.scrollY;
    if(scrollY > 350 ) {
        onScrollPopup.classList.add('onScrollShowPopUp')
    }
    else{
        onScrollPopup.classList.remove('onScrollShowPopUp')
    }

});
const closeScrollPopup = ()=>{
    onScrollPopup.style.display = 'none'
}