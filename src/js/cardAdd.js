const columns = document.querySelectorAll(".column");

columns.forEach(function (column) {
    const showInputsBtn = column.querySelector(".show-inputs-btn");
    const input = column.querySelector(".inputs");
    showInputsBtn.addEventListener('click', function () {
        input.classList.toggle('show-inputs');
    });
});