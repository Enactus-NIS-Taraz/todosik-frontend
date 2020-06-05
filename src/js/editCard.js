function editThisCard(titleValue, descriptionValue, timeValue, realTimeValue) {
  const body = document.getElementById('body');
  const modalBg = document.createElement('div');
  modalBg.className = 'edit-modal-bg';
  body.append(modalBg);

  const editModal = document.createElement('form');
  editModal.className = 'modal';

  modalBg.appendChild(editModal);

  const editModalExit = document.createElement('button');
  editModalExit.className = 'modal__exit';
  editModalExit.innerHTML = '<i class="fas fa-times"></i>';

  editModal.appendChild(editModalExit);

  const editModalHeader = document.createElement('h2');
  editModalHeader.className = 'modal__header';
  editModalHeader.innerText = 'Edit card';

  editModal.appendChild(editModalHeader);

  const editModalLabelTitle = document.createElement('label');
  editModalLabelTitle.className = 'modal__label';
  editModalLabelTitle.innerText = 'Edit title:';

  editModal.appendChild(editModalLabelTitle);

  const editModalTitleInput = document.createElement('input');
  editModalTitleInput.className = 'modal__input';
  editModalTitleInput.value = titleValue.innerText;

  editModal.appendChild(editModalTitleInput);

  const editModalLabelDescription = document.createElement('label');
  editModalLabelDescription.className = 'modal__label';
  editModalLabelDescription.innerText = 'Edit description:';

  editModal.appendChild(editModalLabelDescription);

  const editModalDescriptionInput = document.createElement('input');
  editModalDescriptionInput.className = 'modal__input';
  editModalDescriptionInput.value = descriptionValue.innerText;

  editModal.appendChild(editModalDescriptionInput);

  const editModalLabelTime = document.createElement('label');
  editModalLabelTime.className = 'modal__label';
  editModalLabelTime.innerText = 'Edit expected time:';

  editModal.appendChild(editModalLabelTime);

  const editModalTimeInput = document.createElement('input');
  editModalTimeInput.className = 'modal__input';
  editModalTimeInput.type = 'number';
  editModalTimeInput.value = timeValue.innerText;
  editModalTimeInput.min = '0';
  editModalTimeInput.step = '5';

  editModal.appendChild(editModalTimeInput);

  const editModalRealTime = document.createElement('label');
  editModalRealTime.className = 'modal__label';
  editModalRealTime.innerText = 'Edit real time:';

  editModal.appendChild(editModalRealTime);

  const editModalRealTimeInput = document.createElement('input');
  editModalRealTimeInput.className = 'modal__input';
  editModalRealTimeInput.type = 'number';
  editModalRealTimeInput.min = '0';
  editModalRealTimeInput.step = '5';

  editModal.appendChild(editModalRealTimeInput);

  const editModalButton = document.createElement('button');
  editModalButton.type = 'submit';
  editModalButton.className = 'modal__button';
  editModalButton.innerText = 'Edit';

  editModal.appendChild(editModalButton);

  editModal.addEventListener('submit', (event) => {
    event.preventDefault();

    const valueOfTitle = titleValue;
    valueOfTitle.innerHTML = editModalTitleInput.value;
    const valueOfDescription = descriptionValue;
    valueOfDescription.innerHTML = editModalDescriptionInput.value;
    const valueOfTime = timeValue;
    valueOfTime.innerHTML = editModalTimeInput.value;
    const valueOfRealTime = realTimeValue;
    valueOfRealTime.innerHTML = editModalRealTimeInput.value;

    modalBg.parentNode.removeChild(modalBg);
  });
}

// eslint-disable-next-line import/prefer-default-export
export { editThisCard };
