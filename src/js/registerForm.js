const register = document.querySelector('.register');
const signIn = document.querySelector('.sign-in');
const content = document.querySelector('.account-page__content');
const showSignInLink = document.querySelector('.signin-link');
const showRegisterLink = document.querySelector('.register-link');

showSignInLink.addEventListener('click', () => {
    register.classList.add('register-hide');
    signIn.classList.add('sign-in-show');
    content.classList.add('account-page__content-small')
});

showRegisterLink.addEventListener('click', () => {
    register.classList.remove('register-hide');
    signIn.classList.remove('sign-in-show');
    content.classList.remove('account-page__content-small')
});
