


//- фон для сторінки
function changeBg() {
    let colorBG = prompt("Введіть бажаний кольор фону");
    document.body.style.backgroundColor = colorBG;
}
// - тип шрифта на сторінці
function changeFont() {
    let fontStyle = prompt("Введіть бажаний стиль шрифту");
    document.body.style.fontStyle = fontStyle;
}
//- вирівнювання для заголовка h1
function textAline() {
    let textAl = prompt("Введіть бажане вирівнювання");
    document.querySelector("h1").style.textAlign = textAl;
}
//- фон для параграфа з посиланнями
function changeBgP() {
    let colorBgP = prompt("Введіть бажаний кольор фону");
    document.querySelector('p').style.backgroundColor = colorBgP;
}
// - колір тексту у параграфі з посиланнями і для самих посилань.
// - При чому колір тексту для посилань призначити у циклі
function changeColorL() {
    let colorT = prompt("Введіть бажаний кольор фону");
    document.querySelector('p').style.color = colorT;
    let links = document.querySelectorAll('p>a')
    for (const elem of links) {
        elem.style.color = colorT;
    }
}
//колір, розмір, товщину тексту у елементі div
function changeDiv() {
    let colorTInDiv = prompt("Введіть бажаний колір тексту в блоці");
    let sizeTInDiv = prompt("Введіть бажаний розмір тексту в блоці");
    let weightTInDiv = prompt("Введіть бажанy товщину тексту в блоці");

    console.log(colorTInDiv);
    console.log(sizeTInDiv);
    console.log(weightTInDiv);
    document.querySelector('div').style.color = colorTInDiv;
    document.querySelector('div').style.fontSize = sizeTInDiv;
    document.querySelector('div').style.fontWeight = weightTInDiv;
}
function changeMark() {
    let marker = prompt("Введіть бажаний маркер");
    console.log(marker)

    document.querySelector('ul').style.listStyle = marker;
}
function changeLink() {
    let newLinks = document.querySelectorAll("a");
    console.log(newLinks)
    for (let i = 0; i < newLinks.length; i++) {
        let newLink = prompt("Введіть нове посилання");
        newLinks[i].href = newLink
        let newAdd = '';
        if (newLink.includes('http://')) {
            newAdd = newLink.split('http://')
            console.log(newAdd[i])
        } else if (newLink.includes('https://')) {
            newAdd = newLink.split('https://');

        } else {
            alert("WRONG")
        }
        console.log(newAdd)
        newLinks[i].textContent = newAdd[1];
    }
    console.log(newLinks)

}