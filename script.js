const inputNote = document.querySelector('.note-input')
const outputNote = document.querySelector('.output-div')
const addNewNoteBtn = document.querySelector('.add-note-button')

addNewNoteBtn.addEventListener('click', addNewNoteFun);

function addNewNoteFun(e){
    e.preventDefault();
    const newNote = document.createElement("div");
    newNote.classList.add("new-note");
    newNote.innerHTML = inputNote.value;


    outputNote.appendChild(newNote)
    
}