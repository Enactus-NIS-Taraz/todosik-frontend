/* eslint-disable linebreak-style */
import { addNewCard } from './cardAdd';
import { removeColumn } from './removeColumn';
import { showTitleEditInput } from './columnTitleEdit';
import { getRandomColor } from './getRandomColor';
import { dragAndDrop } from './dragndrop';
import { columnDragNDrop } from './columnDragAndDrop';

// Creating variables
const createColumnButton = document.querySelector('.column-add-button');
const modal = document.querySelector('.modal-bg');
const modalForm = document.querySelector('.modal');
const modalInput = document.querySelector('.modal__input');
const modalExitBtn = document.querySelector('.modal__exit');
const container = document.getElementById('container');

function addColumn(inputValue) {
  const newColumn = document.createElement('div');
  newColumn.className = 'column draggable';

  const columnHeader = document.createElement('div');
  columnHeader.className = 'column__header';
  columnHeader.setAttribute('draggable', true);

  newColumn.appendChild(columnHeader);

  const colorSave = document.createElement('span');
  colorSave.className = 'color-save';
  colorSave.style.display = 'none';
  const array = getRandomColor();
  colorSave.innerText = `rgb(${array[0]}, ${array[1]}, ${array[2]})`;

  newColumn.appendChild(colorSave);

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

  const addCardButton = document.createElement('button');
  addCardButton.className = 'btn show-inputs-btn';

  columnButtons.appendChild(addCardButton);

  const addIcon = document.createElement('i');
  addIcon.className = 'fas fa-plus';

  addCardButton.appendChild(addIcon);

  const deleteColumnButton = document.createElement('button');
  deleteColumnButton.className = 'btn';

  columnButtons.appendChild(deleteColumnButton);

  deleteColumnButton.addEventListener('click', () => {
    removeColumn(newColumn);
  });

  newColumn.setAttribute('draggable', true);

  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt';

  deleteColumnButton.appendChild(trashIcon);

  container.insertBefore(newColumn, createColumnButton);

  addCardButton.addEventListener('click', () => {
    addNewCard(cardContainer, newColumn);
  });

  columnTitle.addEventListener('dblclick', () => {
    showTitleEditInput(columnTitle, columnButtons, columnHeader, columnTitleContent);
  });

  dragAndDrop();

  columnDragNDrop();
}

function showModal() {
  modal.style.display = 'flex';
}

function hideModal() {
  modal.style.display = 'none';
}

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

createColumnButton.onclick = showModal;

addColumn('To do');

addColumn('In progress');

addColumn('Done');
