import axios from 'axios';

const apiUrl = 'https://todosik.herokuapp.com/';

const registerForm = document.getElementById('registerForm');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  axios.post(`${apiUrl}auth/local/register`, {
    username: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  }).then((res) => {
    console.log(res);
  }).catch((err) => console.log(err));
});
