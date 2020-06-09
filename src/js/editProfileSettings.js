const settingsButton = document.querySelector('.settings-btn');
const modalBg = document.querySelector('.modal-bg_settings');

settingsButton.addEventListener('click', () => {
    modalBg.style.display = 'flex';
})