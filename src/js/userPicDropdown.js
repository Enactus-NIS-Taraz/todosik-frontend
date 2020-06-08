const userPic = document.querySelector('.header__pic');
const userDropdown = document.querySelector('.dropdown');

userPic.addEventListener('click', () => {
  userDropdown.classList.toggle('dropdown-active');
});
