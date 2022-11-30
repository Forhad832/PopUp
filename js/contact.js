//code for submit a form data to localStorage
function popUpSubmit(e) {
	event.preventDefault();

	let username = document.getElementById('username').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	
	let user = {
		username: username,
		email: email,
		password: password
	}

	localStorage.setItem(username, JSON.stringify(user));

	popUpForm.classList.remove('popUpFormShow')
};


// code for open a contact form
let popUpForm = document.getElementById('popUpForm')
const popUpContact = () =>{
    popUpForm.classList.add('popUpFormShow')
};


//code for close contact form  
const closeContact = () =>{
    popUpForm.classList.remove('popUpFormShow')
}