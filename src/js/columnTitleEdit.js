function showTitleEditInput(columnTitle, columnButtons, columnHeader, columnTitleContent) {
  const titleOfColumn = columnTitle;
  const buttonsOfColumn = columnButtons;
  const titleContentOfColumn = columnTitleContent;

  titleOfColumn.style.display = 'none';
  buttonsOfColumn.style.display = 'none';
  const editInput = document.createElement('input');
  editInput.className = 'edit-input';
  editInput.value = columnTitleContent.innerText;

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.innerHTML = 'Save';

  columnHeader.appendChild(editInput);
  columnHeader.appendChild(editBtn);

  editBtn.addEventListener('click', () => {
    titleContentOfColumn.innerHTML = editInput.value;
    titleOfColumn.style.display = 'block';
    buttonsOfColumn.style.display = 'block';
    editInput.style.display = 'none';
    editBtn.style.display = 'none';
  });
}

// eslint-disable-next-line import/prefer-default-export
export { showTitleEditInput };
