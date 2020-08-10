//1
let num;
function getArea(num) {
    num = +prompt("введіть число");
    if (num === 0) {
        alert("Будь ласка, введіть радіус!");
    } else if (Number.isNaN(num) === false) {
        let sCircle = Math.PI * Math.pow(num, 2)
        console.log(sCircle.toFixed(2));
    } else if (Number.isNaN(num) === true) {
        alert(" not a number");
        getArea(num)
    }

}
getArea();

//2

let secondNum;

function getSqrt(secondNum) {
    secondNum = +prompt("введіть число");
    if (secondNum == 0) {
        alert("Будь ласка, введіть число!");
    } else if (secondNum < 0) {
        alert("Введіть додатнє число.");
    } else if (Number.isNaN(secondNum) === false) {
        console.log(Math.sqrt(secondNum))
    } else if (Number.isNaN(secondNum) === true) {
        console.log("Повинно бути числове значення.")
    }
}


getSqrt();

//3
let MyMath = {};
MyMath.PI = 3.14;
MyMath.pow = function () {
    let a = +prompt("введіть число");
    let b = +prompt("введіть cтепінь");
    var sum = 0;
    for (let i = 2; i <= b; i++) {
        if (a > 0) {
            sum = a ** b;
        } else if (a < 0) {
            sum = -(a ** b);
        }

    }
    console.log(sum)
}
MyMath.abs = function () {
    let c = +prompt("введіть число");
    if (c >= 0) {
        console.log(c)
    } else if (c < 0) {
        console.log(c * (-1));
    } else if (c == NaN) {
        alert("Повинно бути числове значення")
    }
};
MyMath.max = function (times) {
    let arr = new Array();
    for (let i = 0; i < times; i++) {
        arr[i] = Number(prompt("введіть число"))
    }
    max_arr = arr[0];
    for (var i = 0; i < times; i++) {
        if (max_arr == 0) {
            alert("Будь ласка, введіть число!");
            break
        } else if (isNaN(max_arr)) {
            alert("Повинно бути числове значення.");
            break;
        } else if (arr[i] > max_arr) {
            max_arr = arr[i]

        }
        alert(`Максимальне значення ${max_arr}`);
    }

    //
};

/*MyMath.max(2);*/

MyMath.min = function (times) {
    var arrSec = new Array();
    for (var i = 0; i < times; i++) {
        arrSec[i] = Number(prompt("введіть число"))
    }
    min_arr = arrSec[0];

    for (var i = 0; i < times; i++) {
        if (min_arr == 0) {
            alert("Будь ласка, введіть число!");
            break;
        } else if (isNaN(min_arr)) {
            alert("Повинно бути числове значення.");
            break;
        } else if (arrSec[i] <= min_arr) {
            min_arr = arrSec[i]
        }
    }
    alert(`Мінімальне значення ${min_arr}`);
}



