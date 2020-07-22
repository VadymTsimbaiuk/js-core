//1
let mounth = prompt("введіть число");
switch (mounth) {
    case '1':
        console.log("Jan");
        break;
    case '2':
        console.log("Feb");
        break;
    case '3':
        console.log("Mar");
        break;
    case '4':
        console.log("Apr");
        break;
    case '5':
        console.log("May");
        break;
    case '6':
        console.log("Jul");
        break;
    case '7':
        console.log("Jun");
        break;
    case '8':
        console.log("Aug");
        break;
    case '9':
        console.log("Sept");
        break;
    case '10':
        console.log("Oct");
        break;
    case '11':
        console.log("Now");
        break;
    case '12':
        console.log("Dec");
        break;
    default:
        console.log("Невірний місяць");
        break;
}

//2

function primality(num) {
    num = prompt("введіть число")
    for (let i = 2; i < num; i++) {
        if (num % i === 0) console.log("Число складне");
    }
    console.log("Число просте");
}
primality();

//3
let a = prompt("введіть перше число");
let b = prompt("введіть друге число")

function d(a, b) {
    a = prompt("введіть перше число");
    b = prompt("введіть друге число")
    if (a > b) {
        console.log(a)
    } else if (a === b) {
        console.log("числа рівні")
    } else {
        console.log(b)
    }
};
d();