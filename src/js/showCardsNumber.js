function showCardsNumber (column) {
    let listOfCards = column.querySelectorAll('.card');
    const numberOfCardsElement = column.querySelector('.column__number');
    numberOfCardsElement.innerText = listOfCards.length;
}

export {showCardsNumber};