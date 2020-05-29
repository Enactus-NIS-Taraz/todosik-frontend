function showTitleEditInput(columnTitle, columnButtons, columnHeader, columnTitleContent) {
  columnTitle.style.display = 'none';
  columnButtons.style.display = 'none';
  const editInput = document.createElement('input');
  editInput.className = 'edit-input';
  editInput.value = columnTitleContent.innerText;

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.innerHTML = 'Edit';

  columnHeader.appendChild(editInput);
  columnHeader.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
    columnTitleContent.innerHTML = editInput.value;
    columnTitle.style.display = 'block';
    columnButtons.style.display = 'block';
    editInput.style.display = 'none';
    editBtn.style.display = 'none';
  });
}

export {showTitleEditInput};