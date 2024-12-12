const addButton = document.getElementById('add');
const workFlow = document.getElementById('work-flow');
const testBlock = document.getElementById('work-flow');
const closeBtn = document.getElementById('close-work-flow');
const startText = document.getElementById('start-text');
console.log(testBlock.innerHTML)
addButton.onclick = function() {
    testBlock.style.display = "block";
    startText.style.display = "none";
    workFlow.classList.add("test-block-resized");
}

closeBtn.onclick = function() {
    testBlock.style.display = "none";
    startText.style.display = "block";
    workFlow.classList.remove("test-block-resized");
}