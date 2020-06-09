import axios from 'axios';

const apiUrl = 'https://todosik.herokuapp.com/';

const userNameLogin = document.getElementById('userNameLogin');
const userPasswordLogin = document.getElementById('userPasswordLogin');
const loginForm = document.getElementById('loginForm');

const homePage = document.getElementById('homePage');
const accountPage = document.getElementById('accountPage');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  axios.post(`${apiUrl}auth/local`, {
    identifier: userNameLogin.value,
    password: userPasswordLogin.value,
  }).then((res) => {
    const token = res.data.jwt;
    // Handle success.
    console.log(token);
    console.log(res);

    homePage.style.display = 'flex';
    accountPage.style.display = 'none';
  }).catch((err) => {
    // Handle error.
    console.log(err);
  });
});
