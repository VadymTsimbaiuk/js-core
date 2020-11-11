let arr = [5, 6, 7, 8, 9]
//1 forEach
function Counter() {
    this.sum = 0;
}

Counter.prototype.add = function (array) {
    array.forEach(function (entry) {
        this.sum += entry;
    }, this);
};

const obj = new Counter();

obj.add(arr);
console.log('sum:' + obj.sum)

//2 Map
let newArr = arr.map(num => {
    return num * num
})
console.log(newArr);
//3 every

/*arr.every(callback(currentValue[,index[,array]])[,thisArg])
[12, 54, 18, 130, 44].every(elem => elem >= 10);

*/
let arrEvery = [
    { name: 'Ivan', country: 'Ukraine' },

    { name: 'Petro', country: 'Ukraine' },

    { name: 'Miguel', country: 'Cuba' }
];


let newEvery = arrEvery.every(elem => elem.country === 'Ukraine')
console.log(newEvery);

//4 Some

let newSome = arrEvery.some(elem => elem.country === 'Cuba');
console.log(newSome)

//5 filter
//let newArray = arr.filter(callback(element[,index,[array]])[thisArg])
/*const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

*/

let arrFil = [1, 'string', [3, 4], 5, [6, 7]];
let newArrF = arrFil.filter(obj => typeof (obj) === 'object');
console.log(newArrF);

//6 reduce;
//array.reduce(callback[.initialValue])
/*const reducer = (acumulator, currentValue)=> acumulator + currentValue*/

let arrReduce = [1, 2, 3, 0, 4, 5, 6];
let newReduce = arrReduce.reduce((sum, current) => {
    sum += current;
    if (current == 0) {
        console.log(sum)
    }
    return sum
}, 0)




//6.2
let secondRed = arrReduce.reduce((sum, current, index) => {
    sum += current;
    index++
    if (sum > 10) {
        console.log(`index ${index}`)
    }
    return sum
}, 0)



//7
let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
let newArr7 = arr7.filter(numb => numb > 0)
console.log(newArr7)
let sqrtArr7 = newArr7.map(Math.sqrt)
console.log(sqrtArr7)


