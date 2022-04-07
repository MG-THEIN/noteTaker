const inputHead = document.querySelector('.note-head');
const inputNote = document.querySelector('.note-input');
const outputNote = document.querySelector('.output-div');
const addNewNoteBtn = document.querySelector('.add-note-button')
const modalContainer = document.querySelector('.modal-container');

addNewNoteBtn.addEventListener('click', addNewNoteFun);

function addNewNoteFun(e){
    e.preventDefault();
    const newNote = document.createElement("div");
    newNote.classList.add("new-note");
    newNote.innerHTML = `   <p class="bold">${inputHead.value}</p>
                            <p class="hidden-text">${inputNote.value}</p>`
    
    const viewDetailBtn = document.createElement("button");
    viewDetailBtn.innerHTML = "View Detail"
    viewDetailBtn.classList.add("view-detail-btn");

    newNote.appendChild(viewDetailBtn)

    outputNote.appendChild(newNote)
    
}

outputNote.addEventListener('click', openModal);

function openModal(e){
    e.preventDefault();
    const item = e.target;
    if (item.classList == "view-detail-btn") {
        let itemParent = item.parentElement;
        const modalText1 = itemParent.getElementsByTagName('p')[0].innerHTML;
        const modalText2 = itemParent.getElementsByTagName('p')[1].innerHTML;
        
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<button class="close-model"><i class="fa-solid fa-xmark"></i></button>
                           <h3>${modalText1}</h3>
                           <p>${modalText2}</p>`;

       modalContainer.classList.add("show-modal");

       modalContainer.appendChild(modal);
    }
}
