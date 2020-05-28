/* eslint-disable linebreak-style */
import { showCardsNumber } from './showCardsNumber';

function deleteThisCard(someCard, column) {
  someCard.parentNode.removeChild(someCard);
  showCardsNumber(column);
}

function addNewCard(column) {
  const newCard = document.createElement('form');
  newCard.className = 'inputs';

  const cardHeader = document.createElement('h2');
  cardHeader.className = 'inputs__header';
  cardHeader.innerText = 'Create card';

  newCard.appendChild(cardHeader);

  const inputTitle = document.createElement('input');
  inputTitle.required = true;
  inputTitle.className = 'inputs__item';
  inputTitle.type = 'text';
  inputTitle.placeholder = 'Title...';

  newCard.appendChild(inputTitle);

  const inputDescription = document.createElement('input');
  inputDescription.required = true;
  inputDescription.className = 'inputs__item';
  inputDescription.type = 'text';
  inputDescription.placeholder = 'Description...';

  newCard.appendChild(inputDescription);

  const inputTime = document.createElement('input');
  inputTime.required = true;
  inputTime.className = 'inputs__item';
  inputTime.type = 'number';
  inputTime.placeholder = 'Write time in minuts';
  inputTime.min = '0';
  inputTime.max = '1000000';
  inputTime.step = '5';

  newCard.appendChild(inputTime);

  const addNewCardButton = document.createElement('button');
  addNewCardButton.type = 'submit';
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
  const numberOfCards = column.querySelectorAll('.inputs').length;
  cancelButton.addEventListener('click', cancelCardAdding);

  // toggle effect on inputs
  if (numberOfCards === 0) {
    column.insertBefore(newCard, column.children[0]);
  } else if (numberOfCards === 1) {
    const deleteCard = column.querySelector('.inputs');
    deleteCard.remove();
  }

  newCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const card = document.createElement('div');
    card.className = 'card';

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card__container';

    card.appendChild(cardContainer);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card__title';
    cardTitle.style.width = '90%';

    cardContainer.appendChild(cardTitle);

    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.className = 'card__delete-button';
    cardDeleteButton.innerHTML = '<i class="fas fa-times"></i>';

    // do not forget to change 'X' to icon from fontawesome

    cardDeleteButton.addEventListener('click', () => {
      deleteThisCard(card, column);
    });

    cardContainer.appendChild(cardDeleteButton);

    const cardDesc = document.createElement('div');
    cardDesc.className = 'card__desc';

    card.appendChild(cardDesc);

    const cardTime = document.createElement('div');
    cardTime.className = 'card__time';
    card.appendChild(cardTime);

    cardTitle.innerText = inputTitle.value;
    cardDesc.innerText = inputDescription.value;
    cardTime.innerText = inputTime.value;

    column.appendChild(card);

    const deleteCard = document.querySelector('.inputs');
    deleteCard.remove();

    showCardsNumber(column);
  });
}

// eslint-disable-next-line import/prefer-default-export
export { addNewCard };
