//1 Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які були введені.
let str = prompt("Введіть якесь речення")
let start = 0;
let find = 0;
while (true) {
    let position = str.indexOf(' ', start);
    if (position === -1) break;
    find++;
    start = position + 1;
}
console.log(find);


//2 Користувач вводить email
let email = prompt("введіть вашу е-адресу");
if (email.indexOf('@') == 0) {
    alert("Неправильний формат a")
} else if (email.indexOf('@') == email.length - 1) {
    alert("Неправильний формат b")
} else if (email.indexOf('@') == -1) {
    alert("Неправильний формат c")
} else {
    alert("Вiтаю")
};

// 3
let text = prompt("Введіть якесь речення");
let findHtml = 0;
let startHtml = 0;
while (true) {
    let positionHtml = text.indexOf('html', startHtml);
    if (positionHtml === -1) break;
    findHtml++;
    startHtml = positionHtml + 1
}
console.log(findHtml);

//4
let adress = prompt("введіть URL");
let newAdd = '';
if (adress.includes('http://')) {
    newAdd = adress.split('http://')
    console.log(newAdd[1])
} else if (adress.includes('https://')) {
    newAdd = adress.split('https://');
    console.log(newAdd[1])
} else {
    alert("WRONG")
}
