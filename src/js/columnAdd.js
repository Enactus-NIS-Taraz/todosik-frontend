const button = document.getElementById('button');
const column = document.getElementById('column');
const container = document.getElementById('container');

function addColumn() {
  const clone = column.cloneNode(true);
  container.appendChild(clone);
}

button.onclick = addColumn;
