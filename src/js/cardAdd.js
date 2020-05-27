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
    const numberOfCards = column.querySelectorAll('.inputs').length;
    cancelButton.addEventListener('click', cancelCardAdding);
    if( numberOfCards === 0) {
        column.appendChild(newCard);
    }
    else if( numberOfCards === 1) {
        const deleteInput = column.querySelector('.inputs');
        deleteInput.remove();
    }
  }


export { addNewCard };
