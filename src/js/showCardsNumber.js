/* eslint-disable linebreak-style */
function showCardsNumber(column) {
  const listOfCards = column.querySelectorAll('.column');
  const numberOfCardsElement = column.querySelector('.column__number');
  numberOfCardsElement.innerText = listOfCards.length;
}

// eslint-disable-next-line import/prefer-default-export
export { showCardsNumber };
