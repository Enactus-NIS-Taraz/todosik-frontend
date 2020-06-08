const sideBarBtns = document.querySelectorAll('.side-bar__btn');
const sideBar = document.querySelector('.side-bar');

sideBarBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        sideBar.classList.toggle('side-bar-active');
    }
    )
});