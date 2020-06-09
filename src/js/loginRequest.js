import axios from 'axios';

const apiUrl = 'https://todosik.herokuapp.com/';

const userNameLogin = document.getElementById('userNameLogin');
const userPasswordLogin = document.getElementById('userPasswordLogin');
const loginForm = document.getElementById('loginForm');

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
  }).catch((err) => {
    // Handle error.
    console.log(err);
  });
});
