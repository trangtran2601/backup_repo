Array.prototype.reduce2 = function(callback, result) {
    var i = 0
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (; i < this.length ; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

var numbers = [1,2,3,4,5]

var test = numbers.reduce2(function(total, currentNumber){
    console.log(total,currentNumber)
    return total + currentNumber
})

console.log(test)

//Thực hành sử dụng phương thức reduce

var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];



function arrToObj(arr){
    var result = arr.reduce(function(NewObject,arrItem){
        NewObject[arrItem[0]] = arrItem[1]
        return NewObject
    },{});
        return result
}


console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }