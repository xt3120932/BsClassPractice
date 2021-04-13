console.log(Math.random());

console.log(Math.floor(3.1415926));
console.log(Math.floor(-3.1415926));

function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}
console.log(getRandom(1, 100));


let array = [...Array(100).keys()]; //產生0~99數字陣列
array.forEach((item, index) => {
    console.log(getRandom(1, 100));
});