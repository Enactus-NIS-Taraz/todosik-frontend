/* eslint-disable linebreak-style */
import { addNewCard } from './cardAdd';
import { removeColumn } from './removeColumn';
import { showTitleEditInput } from './columnTitleEdit'

// Creating variables
const button = document.getElementById('button');
const modal = document.querySelector('.modal-bg');
const modalForm = document.querySelector('.modal');
const modalInput = document.querySelector('.modal__input');
const modalExitBtn = document.querySelector('.modal__exit');
const container = document.getElementById('container');

function showModal() {
  modal.style.display = 'flex';
}

function hideModal() {
  modal.style.display = 'none';
}

function addColumn(inputValue) {
  const newColumn = document.createElement('div');
  newColumn.className = 'column';

  const columnHeader = document.createElement('div');
  columnHeader.className = 'column__header';

  newColumn.appendChild(columnHeader);

  const cardContainer = document.createElement('div');
  cardContainer.className = 'column__card-container';

  newColumn.appendChild(cardContainer);

  const columnTitle = document.createElement('div');
  columnTitle.className = 'column__title';

  columnHeader.appendChild(columnTitle);

  const columnTitleContent = document.createElement('span');
  columnTitleContent.className = 'column__title_content';
  columnTitleContent.innerHTML = inputValue;

  columnTitle.appendChild(columnTitleContent);

  const columnButtons = document.createElement('div');
  columnButtons.className = 'column__buttons';

  columnHeader.appendChild(columnButtons);

  const columnNumber = document.createElement('div');
  columnNumber.className = 'column__number';
  columnNumber.innerHTML = 0;

  columnTitle.prepend(columnNumber);

  const addButton = document.createElement('button');
  addButton.className = 'btn show-inputs-btn';

  columnButtons.appendChild(addButton);

  const addIcon = document.createElement('i');
  addIcon.className = 'fas fa-plus';

  addButton.appendChild(addIcon);

  const trashButton = document.createElement('button');
  trashButton.className = 'btn';

  columnButtons.appendChild(trashButton);

  trashButton.addEventListener('click', () => {
    removeColumn(newColumn);
  });

  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt';

  trashButton.appendChild(trashIcon);

  container.insertBefore(newColumn, button);

  addButton.addEventListener('click', () => {
    addNewCard(cardContainer);
  });

  columnTitle.addEventListener('dblclick', showTitleEditInput(columnTitle, columnButtons, columnHeader));
}

// function editColumnTitle(e) {
// }

function submitInputValue(event) {
  event.preventDefault();
  const inputValue = modalInput.value;
  addColumn(inputValue);
  modalInput.value = '';
  hideModal();
}

// Calling modal window functions
modalExitBtn.addEventListener('click', hideModal);
modalForm.addEventListener('submit', submitInputValue);

button.onclick = showModal;

addColumn('To do');

addColumn('In progress');

addColumn('Done');
