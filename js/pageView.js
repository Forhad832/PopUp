let pageView = document.querySelector('.pageView');
window.addEventListener('load', function () {

    setTimeout(() => {
        pageView.classList.add('pageViewShowPopUp')
    }, 1000);

    let pageViewsNumber = this.localStorage.getItem('pageViews');

    if(pageViewsNumber) {
        pageViewsNumber = Number(pageViewsNumber) +1;
        localStorage.setItem('pageViews', pageViewsNumber)
    }
    else{
        pageViewsNumber = 1;
        localStorage.setItem('pageViews', 1)
    }

    let pageViewText = document.getElementById('viewText');
    pageViewText.innerHTML = `${pageViewsNumber} times`;

    if(pageViewsNumber === 3) {
        pageView.style.display = 'block'
    }
    else{
        pageView.style.display = 'none'
    }
});


const closePageView = ()=>{
    pageView.style.display = 'none'
}