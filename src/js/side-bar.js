const sidebarBtns = document.querySelectorAll('.side-bar__btn');
const sidebar = document.querySelector('.side-bar');
const sidebarBtnOutside = document.querySelector('.side-bar__btn_out');

sidebarBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        sidebarBtnOutside.classList.toggle('unvisible')
        sidebar.classList.toggle('side-bar-active');
        console.log('bitch');
    }
    )
});