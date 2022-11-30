let sessionPopup = document.querySelector('.sessionPopup');
window.addEventListener('load' , function () {
    setTimeout(()=>{
        sessionPopup.classList.add('sessionShowPopUp');
    },1000);


    let pageSession = sessionStorage.getItem('page_session');

	if (pageSession) {
		pageSession = Number(pageSession) + 1;
		sessionStorage.setItem('page_session', pageSession);
	} 
    else {
		pageSession = 1;
		sessionStorage.setItem('page_session', 1)
	}


	let sessionText = document.getElementById('sessionText');
	sessionText.innerHTML = `Thank You For Visit  ${pageSession} times`;


    if(pageSession === 2) {
        sessionPopup.style.display = 'block';
    }
    else{
        sessionPopup.style.display = 'none'
    }
});

const closeSession = ()=>{
    sessionPopup.style.display = 'none'
}