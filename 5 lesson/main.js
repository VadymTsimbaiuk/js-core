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
let list=[-50,-23,-22,-152,25,-46,55,-99,199]

function maxNum(list) {
    let max;
    let min= list[0];
    for(let i = 0; i < list.length; i++){
        if((list[i])<min){
            min = list[i];
        } else {
            max = list[i]
        }
    } return max;
}
console.log(maxNum(list));
 
