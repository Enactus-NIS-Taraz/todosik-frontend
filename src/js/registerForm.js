
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('register-container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    console.log('bitch');
    
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});