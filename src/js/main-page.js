const logOut = document.querySelector('.log-out-btn');
const accoutPage = document.querySelector('.account-page');
const homeBody = document.querySelector('.home-body');

logOut.addEventListener('click', () => {
    homeBody.style.display = 'none';
    accoutPage.style.display = 'block';
})
