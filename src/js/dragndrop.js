/* eslint-disable linebreak-style */
function dragAndDrop () {
  const cards = document.querySelectorAll('.card');
  const cardContainers = document.querySelectorAll('.column__card-container');
  let draggingCard = null;

  cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
  });

  function dragStart () {
    draggingCard = this;
    console.log('dragstart');
    
    setTimeout(() => {
      this.classList.add('hide-card');
    }, 0)
  };

  function dragEnd () {
    this.classList.remove('hide-card');
  };

  function dragOver (e) {
    e.preventDefault();
  };

  function dragEnter (e) {
    e.preventDefault();
    this.classList.add('hovered-card');
  };

  function dragLeave () {
    this.classList.remove('hovered-card');
  }

  function dragDrop () {
    if(draggingCard) {
      this.appendChild(draggingCard);
      console.log('drop');
      this.classList.remove('hovered-card');
      draggingCard = null;
      
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