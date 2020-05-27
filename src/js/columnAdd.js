const button = document.getElementById('button');

const container = document.getElementById('container');

function removeColumn(column) {
  column.parentNode.removeChild(column);
}

function addNewCard(column) {
  const newCard = document.createElement('div');
  newCard.className = 'inputs';

  const cardHeader = document.createElement('h2');
  cardHeader.className = 'inputs__header';
  cardHeader.innerText = 'Create card';

  newCard.appendChild(cardHeader);

  const inputTitle = document.createElement('input');
  inputTitle.className = 'inputs__item';
  inputTitle.type = 'text';
  inputTitle.placeholder = 'Title...';

  newCard.appendChild(inputTitle);

  const inputDescription = document.createElement('input');
  inputDescription.className = 'inputs__item';
  inputDescription.type = 'text';
  inputDescription.placeholder = 'Description...';

  newCard.appendChild(inputDescription);

  const inputTime = document.createElement('input');
  inputTime.className = 'inputs__item';
  inputTime.type = 'number';
  inputTime.placeholder = 'Estimated lead time';

  newCard.appendChild(inputTime);

  const addNewCardButton = document.createElement('button');
  addNewCardButton.className = 'inputs__button input__button_add';
  addNewCardButton.innerText = 'Add';

  newCard.appendChild(addNewCardButton);

  const cancelButton = document.createElement('button');
  cancelButton.className = 'inputs__button';
  cancelButton.innerText = 'Cancel';

  newCard.appendChild(cancelButton);

  function cancelCardAdding() {
    newCard.parentNode.removeChild(newCard);
  }
  cancelButton.addEventListener('click', cancelCardAdding);

  column.appendChild(newCard);
}

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
