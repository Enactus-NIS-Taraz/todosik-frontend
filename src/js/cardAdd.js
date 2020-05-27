// const columns = document.querySelectorAll('.column');

// function addCard(column) {
//   const showInputsBtn = column.querySelector('.show-inputs-btn');
//   const input = column.querySelector('.inputs');
//   showInputsBtn.addEventListener('click', () => {
//     input.classList.toggle('show-inputs');
//   });
// }

// columns.forEach(addCard);

// const column = document.getElementById('column');

// const newCard = document.createElement('div');
// newCard.className = 'inputs';

// const cardHeader = document.createElement('h2');
// cardHeader.className = 'inputs__header';
// cardHeader.innerText = 'Create card';

// newCard.appendChild(cardHeader);

// const inputTitle = document.createElement('input');
// inputTitle.className = 'inputs__item';
// inputTitle.type = 'text';
// inputTitle.placeholder = 'Title...';

// newCard.appendChild(inputTitle);

// const inputDescription = document.createElement('input');
// inputDescription.className = 'inputs__item';
// inputDescription.type = 'text';
// inputDescription.placeholder = 'Description...';

// newCard.appendChild(inputDescription);

// const inputTime = document.createElement('input');
// inputTime.className = 'inputs__item';
// inputTime.type = 'number';
// inputTime.placeholder = 'Estimated lead time';

// newCard.appendChild(inputTime);

// const addButton = document.createElement('button');
// addButton.className = 'inputs__button input__button_add';
// addButton.innerText = 'Add';

// newCard.appendChild(addButton);

// const cancelButton = document.createElement('button');
// cancelButton.className = 'inputs__button';
// cancelButton.innerText = 'Cancel';

// newCard.appendChild(cancelButton);

// function addNewCard() {
//   column.appendChild(newCard);
// }

// column.addEventListener('click', addNewCard);

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

export {addNewCard};