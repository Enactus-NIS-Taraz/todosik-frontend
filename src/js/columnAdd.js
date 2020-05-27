import { addNewCard } from './cardAdd';
import {removeColumn} from './removeColumn'

const button = document.getElementById('button');

const container = document.getElementById('container');


function addColumn() {
  const newColumn = document.createElement('div');
  newColumn.className = 'column';

  const columnHeader = document.createElement('div');
  columnHeader.className = 'column__header';

  newColumn.appendChild(columnHeader);

  const columnTitle = document.createElement('div');
  columnTitle.className = 'column__title';
  columnTitle.innerHTML = 'To do';

  columnHeader.appendChild(columnTitle);

  const columnButtons = document.createElement('div');
  columnButtons.className = 'column__buttons';

  columnHeader.appendChild(columnButtons);

  const columnNumber = document.createElement('div');
  columnNumber.className = 'column__number';
  columnNumber.innerHTML = 1;

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
    addNewCard(newColumn);
  });
}
button.onclick = addColumn;
