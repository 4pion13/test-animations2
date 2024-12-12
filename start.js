const addButton = document.getElementById('add');
const workFlow = document.getElementById('work-flow');
const testBlock = document.getElementById('work-flow');
const closeBtn = document.getElementById('close-work-flow');
const startText = document.getElementById('start-text');
console.log(testBlock.innerHTML)
addButton.onclick = function() {
    workFlow.classList.add("test-block-resized");
}

closeBtn.onclick = function() {
    workFlow.classList.remove("test-block-resized");
}