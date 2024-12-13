const addButton = document.getElementById('add');
const workFlow = document.getElementById('work-flow');
const testBlock = document.getElementById('work-flow');
const closeBtn = document.getElementById('close-work-flow');
const startText = document.getElementById('start-text');
const noteBtn = document.getElementById('note-btn');
const noteBlock = document.getElementById('note-block');
const closeNote = document.getElementById('close-note');
let tg = window.Telegram.WebApp;
document.getElementById("name").textContent = tg.initDataUnsafe.user.username;
tg.expand();
console.log(noteBlock.innerHTML);
console.log(testBlock.innerHTML)
addButton.onclick = function() {
    workFlow.classList.add("test-block-resized");
}

closeBtn.onclick = function() {
    workFlow.classList.remove("test-block-resized");
}


noteBtn.onclick = function() {
    noteBlock.classList.add("note-block-resized");
}

closeNote.onclick = function() {
    noteBlock.classList.remove("note-block-resized");
}