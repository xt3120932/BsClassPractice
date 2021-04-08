let Computer = ['CPU', 'DRAM', 'SSD', 'Mouse'];
let comp = new Array('CPU', 'DRAM', 'SSD',
    'Mouse');
let Fruits = ['Apple', 'Banana', 'Cherry'];
let Person = ['John', 35, 'john@gmail.com'];

//清空陣列
let friends = ['David', 'Mary', 'John'];
// friends = [];
// friends.length = 0;
// friends.splice(0, friends.length);
console.log(friends);

//合併陣列內容 方法2
let text2 = "";
Fruits.forEach((item, index) => {
    text2 += item;
});
console.log(text2);

//合併陣列內容 方法3
console.log(Fruits.join());
console.log(Fruits.join(""));
console.log(Fruits.join("-"));

//ex Push & Pop
let Friends = [];
Friends.push('David');
Friends.push('Mary');
Friends.push('John');

console.log(Friends);

Friends.pop();
console.log(Friends);

//ex concat
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array3);


var array4 = [...array1, ...array2];
console.log(array4);

//
let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
console.log(Cars);
console.log(Cars.reverse());
console.log(Cars.sort());
console.log(Cars.sort().reverse);

let car = Cars.find(c => c == 'Benz');
let index = Cars.indexOf('Audi');
let idx = Cars.findIndex(c => c == 'Benz');

console.log(car);
console.log(index);
console.log(idx);

let Prices = [280, 320, 250, 210];
console.log(Prices.findIndex(p => p > 300));
console.log(Prices.filter(p => p > 250));

Prices.filter(function (item, index) {
    if (item > 250) {
        console.log(Cars[index] + "'s price is " + item + ", it's larger than 250.")
    }
});