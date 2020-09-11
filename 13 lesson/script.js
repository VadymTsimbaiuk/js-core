
let colDiv = document.querySelector('.color-container');
let div = document.querySelector('.image-container');
const colorTr = document.querySelectorAll(".colorTr");



document.querySelector(".color").addEventListener("click", function () {
    colDiv.style.display = "none";
    colDiv.style.display = (colDiv.style.display == "none") ? "block" : "none"
    div.style.display = "none";
})
document.querySelector(".images").addEventListener("click", function () {
    div.style.display = "none";
    colDiv.style.display = "none";
    div.style.display = (div.style.display == "none") ? "block" : "none";
});

let ol = document.querySelector('ol')
let element = document.querySelector('body');
let classes = element.classList;
let ul = document.querySelector('ul');

ol.addEventListener('click', (e) => {
    classes.add(e.target.className);
    classes.replace(classes[0], e.target.className);
    console.log(e.target.className);
})

ul.addEventListener('click', (e) => {
    classes.add(e.target.className);
    classes.replace(classes[0], e.target.className);
    console.log(e.target.className);
})

