const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes .foreach(note) => {
    const
}



function createNoteEl(id,content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;
}
