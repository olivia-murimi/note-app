const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes .foreach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl,btnEl);

});



function createNoteEl(id,content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblick", () => {
    const warning = confirm("Do you want to delete this note");
    if (warning) {
        deleteNote(id,element);
    }
    });
    
    element.addEventListener("input", () =>{
    updateNote(id, element.value);
    });

    return element;

}

function deleteNote(id,element){
    const notes = getNotes().filter((note)=>note.id != id)
    saveNote(notes)
    appEl.removeChild(element)
}
function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() *100000),
        content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);

    saveNote(notes);
    
}

function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

