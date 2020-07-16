let check = prompt("Ввежіть ім'я");
if (check == "LOGOS") {
    let password = prompt("Введіть пароль");
    if (password === "LOGOS") {
        console.log("Ласкаво просимо!");

    } else if (password == null) {
        console.log("Вхід скасований")
    } else {
        console.log("Пароль невірний");
    }
} else if (check === "") {
    console.log("Введіть ім'я")
} else if (check == null) {
    console.log("Вхід скасований")
} else {
    console.log("Я вас не знаю")
}