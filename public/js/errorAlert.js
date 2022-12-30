let erroDisplay = document.querySelector(".erro");

function alertRemove() {
    setTimeout( () => {
        erroDisplay.classList.remove("display");
    }, 5000);
}
alertRemove();