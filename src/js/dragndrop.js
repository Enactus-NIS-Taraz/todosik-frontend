function dragAndDrop () {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const columns = document.querySelectorAll('.column');
    
        function dragStart () {
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
            this.appendChild(card);
            console.log(card);
            
            this.classList.remove('hovered-card');
        }

        columns.forEach((column) => {
            column.addEventListener('dragover', dragOver);
            column.addEventListener('dragenter', dragEnter);
            column.addEventListener('dragleave', dragLeave);
            column.addEventListener('drop', dragDrop);
        });
    
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    })
}

export {dragAndDrop};