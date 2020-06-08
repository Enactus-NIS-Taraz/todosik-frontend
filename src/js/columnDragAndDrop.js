const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');
const columnAddButton = document.querySelector('.column-add-button')

draggables.forEach(draggable => {
    const draggableHeader = draggable.querySelector('.column__header');
    draggableHeader.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })

    draggableHeader.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
});

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientX);
        
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            container.insertBefore(draggable, columnAddButton);
        } else {
        container.insertBefore(draggable, afterElement);
        }
    });
});

function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
            } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY}).element;
}