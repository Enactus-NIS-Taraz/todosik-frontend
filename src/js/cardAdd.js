/* eslint-disable linebreak-style */
import { showCardsNumber } from './showCardsNumber';
import { dragAndDrop } from './dragndrop';
import { editThisCard } from './editCard';

function deleteThisCard(someCard, column) {
  someCard.parentNode.removeChild(someCard);
  showCardsNumber(column);
}

function addNewCard(column, newColumn) {
  const createCardForm = document.createElement('form');
  createCardForm.className = 'inputs';

  const formHeader = document.createElement('h2');
  formHeader.className = 'inputs__header';
  formHeader.innerText = 'Create card';

  createCardForm.appendChild(formHeader);

  const titleInput = document.createElement('input');
  titleInput.required = true;
  titleInput.className = 'inputs__item';
  titleInput.type = 'text';
  titleInput.placeholder = 'Title...';

  createCardForm.appendChild(titleInput);

  const descriptionInput = document.createElement('input');
  descriptionInput.required = true;
  descriptionInput.className = 'inputs__item';
  descriptionInput.type = 'text';
  descriptionInput.placeholder = 'Description...';

  createCardForm.appendChild(descriptionInput);

  const timeInput = document.createElement('input');
  timeInput.required = true;
  timeInput.className = 'inputs__item';
  timeInput.type = 'number';
  timeInput.placeholder = 'Write time in minuts';
  timeInput.min = '0';
  timeInput.max = '1000000';
  timeInput.step = '5';

  createCardForm.appendChild(timeInput);

  const addNewCardButton = document.createElement('button');
  addNewCardButton.type = 'submit';
  addNewCardButton.className = 'inputs__button inputs__button_add';
  addNewCardButton.innerText = 'Add';

  createCardForm.appendChild(addNewCardButton);

  const cancelButton = document.createElement('button');
  cancelButton.className = 'inputs__button';
  cancelButton.innerText = 'Cancel';

  createCardForm.appendChild(cancelButton);

  function cancelCardAdding() {
    createCardForm.parentNode.removeChild(createCardForm);
  }

  const numberOfCards = column.querySelectorAll('.inputs').length;
  cancelButton.addEventListener('click', cancelCardAdding);

  // toggle effect on inputs
  if (numberOfCards === 0) {
    column.insertBefore(createCardForm, column.children[0]);
  } else if (numberOfCards === 1) {
    const deleteCard = column.querySelector('.inputs');
    deleteCard.remove();
  }

  createCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const card = document.createElement('div');
    card.className = 'card js-card';
    card.setAttribute('draggable', true);

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card__container';

    card.appendChild(cardContainer);

    const colorMark = document.createElement('div');
    colorMark.classList.add('card-color');
    card.appendChild(colorMark);

    cardContainer.appendChild(colorMark);

    const cardContainerButtons = document.createElement('div');
    cardContainerButtons.className = 'card__container-buttons';

    cardContainer.appendChild(cardContainerButtons);

    const cardEditButton = document.createElement('button');
    cardEditButton.className = 'card__edit-button';
    cardEditButton.innerHTML = '<i class="far fa-edit"></i>';

    cardContainerButtons.appendChild(cardEditButton);

    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.className = 'card__delete-button';
    cardDeleteButton.innerHTML = '<i class="fas fa-times"></i>';

    cardDeleteButton.addEventListener('click', () => {
      deleteThisCard(card, newColumn);
    });

    cardContainerButtons.appendChild(cardDeleteButton);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card__title';
    cardTitle.style.width = '90%';

    card.appendChild(cardTitle);

    const cardDesc = document.createElement('div');
    cardDesc.className = 'card__desc';

    card.appendChild(cardDesc);

    const cardTime = document.createElement('div');
    cardTime.className = 'card__time';

    card.appendChild(cardTime);

    const cardRealTime = document.createElement('div');
    cardRealTime.className = 'card__time';

    card.appendChild(cardRealTime);

    cardTitle.innerText = titleInput.value;
    cardDesc.innerText = descriptionInput.value;
    cardTime.innerText = timeInput.value;

    cardEditButton.addEventListener('click', () => {
      editThisCard(cardTitle, cardDesc, cardTime, cardRealTime);
    });

    column.appendChild(card);

    const deleteCard = document.querySelector('.inputs');
    deleteCard.remove();

    showCardsNumber(newColumn);

    dragAndDrop();
  });
}


// eslint-disable-next-line import/prefer-default-export
export { addNewCard };
