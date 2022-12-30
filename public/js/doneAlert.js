let doneDisplay = document.querySelector(".done");

function alertRemove() {
    setTimeout( () => {
        doneDisplay.classList.remove("display");
    }, 5000);
}
alertRemove();
