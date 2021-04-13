var cars = ['Bmw', 'Benz', 'Audi', 'Lexus'];
var price = [280, 320, 250, 210];

//reduce()⽅法是對所有陣列元素作加總
console.log('總金額 :' + price.reduce(function (accumulator, current) {
    return accumulator + current;
}));

//map()⽅法是對每⼀個陣列元素作運算，並將結果回傳⾄新陣列
var PriceWithTax = price.map(x => x * 1.05);
console.log(PriceWithTax);

let array = [...Array(100).keys()];
let ary1 = array.map(x => x + 1);
console.log(ary1);

array.forEach((item, index) => {
    console.log(getRandom(1, 100));
});

function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}