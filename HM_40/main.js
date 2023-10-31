function createEditableArea(target, originalText) {
    const textarea = document.createElement('textarea');
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Зберегти';
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Скасувати';

    target.innerHTML = '';
    target.appendChild(textarea);
    target.appendChild(saveButton);
    target.appendChild(cancelButton);

    textarea.value = originalText;

    saveButton.addEventListener('click', function() {
        target.textContent = textarea.value;
    });

    cancelButton.addEventListener('click', function() {
        target.textContent = originalText;
    });
}

function handleTable(event) {
    const target = event.target;
    if (target.tagName === 'TH') {
        const originalText = target.textContent;
        createEditableArea(target, originalText);
    }
}

const table = document.querySelector('table');
table.addEventListener('click', handleTable);