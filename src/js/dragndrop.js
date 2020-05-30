import { showCardsNumber } from './showCardsNumber';

/* eslint-disable linebreak-style */
function dragAndDrop () {
  const cards = document.querySelectorAll('.card');
  const cardContainers = document.querySelectorAll('.column__card-container');
  const columns = document.querySelectorAll('.column');
  let draggingCard = null;

  cards.forEach((card) => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
  });

  function dragStart () {
    draggingCard = this;
    setTimeout(() => {
      this.classList.add('hide-card');
    }, 0);
  };

  function dragEnd () {
    this.classList.remove('hide-card');
  };

  function dragOver (e) {
    e.preventDefault();
  };

  function dragEnter (e) {
    e.preventDefault();
    this.classList.add('hovered-column');
  };

  function dragLeave () {
    this.classList.remove('hovered-column');
  }

  function dragDrop () {
    if(draggingCard) {
      this.appendChild(draggingCard);
      this.classList.remove('hovered-column');
      draggingCard = null;
      columns.forEach((column) => {
        showCardsNumber(column);
      });
    }
  }

  cardContainers.forEach((container) => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', dragDrop);
});
}
export {dragAndDrop};