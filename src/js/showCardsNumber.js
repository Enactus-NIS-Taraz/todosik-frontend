let numberOfCards = 0;

function showCardsNumber (column) {
    let listOfCards = column.querySelectorAll('.card');
    numberOfCards = listOfCards.length;
}

export {showCardsNumber, numberOfCards};