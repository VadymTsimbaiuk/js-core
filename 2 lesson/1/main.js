//1
let point = 0;
let first_ask = prompt("Який футбольний клуб зараз №1");
if (first_ask === "Шахтар Донецьк" || first_ask === "шахтар" || first_ask === "шахтар донецьк") {
    console.log("Правильно!");
    point++;
} else {
    console.log("Загляньте в гугл")
}
let second_ask = prompt("Хто президент України у 2020 році?");
if (second_ask === "Володимир Зеленський" || second_ask === "Зеленський Володимир" || second_ask === "Зеленський") {
    console.log("Правильно!");
    point++;

} else {
    console.log("Загляньте в гугл")
}
let third_ask = prompt("Яка найвища гора України");
if (third_ask === "Говерла" || third_ask === "говерла") {
    console.log("Та ви знавець географії");
    point++;
} else {
    console.log("Загляньте в гугл")
}
let four_ask = prompt("Хто зображений на купюрі номіналом 20 гривень?");
if (four_ask === "Франко" || four_ask === "Іван Франко" || four_ask === "Франко Іван") {
    console.log("Правильно!");
    point++;
} else {
    console.log("Загляньте в гугл")
}
let five_ask = prompt("Як Геральд з Рівії називає свою кобилу?");
if (five_ask === "плотва") {
    console.log("Правильно!");
    point++;
} else {
    console.log("Зараза!")
}
let six_ask = prompt("Молот Тора?");
if (six_ask === "мйольнір" || six_ask === "mjolnir" || six_ask === "мьёльнир") {
    console.log("Правильно!");
    point++;
} else {
    console.log("Загляньте в гугл")
}
let seven_ask = prompt("Улюблена група Залізної людини?");
if (seven_ask === "AC/DC" || seven_ask === "ac/dc") {
    console.log("Правильно!");
    point++;

} else {
    console.log("я бачу ви не фанат КВМ");

}
let eight_ask = prompt("Найкращий детектив Готема?");
if (eight_ask === "бетмен" || eight_ask === "batman") {
    console.log("Правильно!");
    point++;
} else {
    console.log("Явно не ви")
}
let nine_ask = prompt("Герой якого серіалу носить ім'я 'Homelander'?");
if (nine_ask === "пацани" || nine_ask === "the boys" || nine_ask === "хлопаки") {
    console.log("Правильно!");
    point++;
} else {
    console.log("Веселий серіальчик подивіться при можливості")
}
let ten_ask = prompt("Джон Сноу - ");
if (ten_ask === "король півночі" || ten_ask === "king in the north" || ten_ask === "король севера") {
    console.log("Правильно!");
    point++;
} else {
    console.log("Подивіться нарешті серіал!")
};
if (point <= 3) {
    console.log(`Ой лишенько, вам слід перепройти тест: набрали ${point} балів`);
} else if (point <= 7) {
    console.log(`Результат такий собі: набрали ${point} балів`);
} else {
    console.log(`Вітаю, ви геній: набрали ${point} балів`);
}