function showColumnColor() {
  const columns = document.querySelectorAll('.column');
  columns.forEach((column) => {
    const colorSave = column.querySelector('.color-save');
    const cards = column.querySelectorAll('.card');
    cards.forEach((card) => {
      const colorMark = card.querySelector('.card-color');
      colorMark.style.background = colorSave.innerHTML.toString();
    });
  });
}

// eslint-disable-next-line import/prefer-default-export
export { showColumnColor };
