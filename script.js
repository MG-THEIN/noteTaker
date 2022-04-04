const inputNote = document.querySelector('.note-input')
const outputList = document.querySelector('.note-list')
const addNewNoteBtn = document.querySelector('.add-note-button')

addNewNoteBtn.addEventListener('click', addNewNoteFun);

function addNewNoteFun(e){
    e.preventDefault();
    alert("This works");
    
}