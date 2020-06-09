const settingsButton = document.querySelector('.settings-btn');
const modalBg = document.querySelector('.modal-bg_settings');
const dropdown = document.querySelector('.dropdown');

settingsButton.addEventListener('click', () => {
    modalBg.style.display = 'flex';
    dropdown.classList.remove('dropdown-active');
})