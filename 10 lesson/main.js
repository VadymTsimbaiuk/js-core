//1 arrCopy(arr)


function arrCopy(arr) {
    return Array.from(arr)
}
const arr1 = arrCopy([1, 2, 3])
const arr2 = arrCopy([1, 2, 3, [10, 20]])

// 2 arrToString(arr)
function arrToString(arr) {
    let newArr = arr.map(x => x + '');
    return newArr;
}

//3 getLenght(arr)

function getLenght(arr) {
    let lArr = arr.map(function (e) { return e.length; });
    return lArr;
}
let arr1 = getLenght(["Ivan", "Pavlo", "Ira"]);

//4

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase()
    }
    return arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos
    });
}

