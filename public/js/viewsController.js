const menuItems = document.querySelectorAll(".menu-item");
const section = document.querySelector(".section");
const sectionArea = document.querySelector(".section");
const buttonAdd = document.querySelectorAll('.button-add');
const erro = document.querySelector(".erro")

var itemDesc;
var addTitle;

menuItems.forEach((item) => {
    item.addEventListener("click", ()=>{
        clearActive();
        item.classList.add("active");

        clearActiveSection()
        clearSectionClass();
        itemDesc = document.querySelector(".menu-item.active").getElementsByClassName("item-desc")[0].innerHTML;

        switch (itemDesc) {
            case 'Pedidos':
                addTitle = "Adicionar - Pedido";
                section.classList.add("pedidos");
                sectionArea.getElementsByClassName("section-area")[2].classList.add("active-section");
                break;
            case 'Funcionários':
                addTitle = "Adicionar - Funcionário";
                sectionArea.getElementsByClassName("section-area")[0].classList.add("active-section");
                section.classList.add("funcionarios");
                break;
            case 'Clientes':
                addTitle = "Adicionar - Cliente";
                section.classList.add("clientes");
                sectionArea.getElementsByClassName("section-area")[1].classList.add("active-section");
                break;   
            case 'Garagem':
                addTitle = "Adicionar - Transporte";
                section.classList.add("garagem");
                sectionArea.getElementsByClassName("section-area")[4].classList.add("active-section");
                break;
            case 'DashBoard':
                addTitle = "Adicionar - Transporte";
                section.classList.add("garagem");
                sectionArea.getElementsByClassName("section-area")[8].classList.add("active-section");
                break;    
        };
    })
});

buttonAdd.forEach((item) => {
    item.addEventListener("click", ()=>{
        clearActiveSection();

        switch (itemDesc) {
            case 'Pedidos':
                sectionArea.getElementsByClassName("section-area")[6].classList.add("active-section");
                break;
            case 'Funcionários':
                sectionArea.getElementsByClassName("section-area")[3].classList.add("active-section");
                break;
            case 'Clientes':
                sectionArea.getElementsByClassName("section-area")[7].classList.add("active-section");
                break;   
            case 'Garagem':
                sectionArea.getElementsByClassName("section-area")[5].classList.add("active-section");
                break;          
        };
    })
})

function clearActive() {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    })
};

function clearSectionClass() {
    section.classList.remove("pedidos");
    section.classList.remove("clientes");
    section.classList.remove("estoque");
    section.classList.remove("garagem");
    section.classList.remove("funcionarios");
};

function clearActiveSection(){
    sectionArea.getElementsByClassName("section-area")[0].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[1].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[2].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[3].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[4].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[5].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[6].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[7].classList.remove("active-section");
    sectionArea.getElementsByClassName("section-area")[8].classList.remove("active-section");
};

