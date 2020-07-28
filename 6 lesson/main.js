//1
let fib = (n) => {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(a)
    }
    return b;

};
console.log(fib(5));
console.log(fib(10));

//2
let startNum = 1
let result;
var i = 1;
let sum = 0;

result = function (quantity, a) {

    while (i <= quantity) {
        console.log(startNum);
        startNum *= a;
        i++

    }
    return startNum - 1;

}
// або
let b = 1
let result;
var i = 1;
let sum;

result = function (n, q) {
    sum = b * ((1 - Math.pow(q, n)) / (1 - q));
    console.log(sum)
}

//3


let simpleNum = function () {
    let n = prompt("введіть число");
    nextPrime:
        for (let i = prompt("введіть інше число"); i >= n, i >= 2; i--) {

            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            };

            console.log(i);
        }
}
simpleNum();