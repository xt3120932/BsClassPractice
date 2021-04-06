const title = function (title) {
    console.log('');
    console.log(`================${title}================`);
}
title('一維陣列')

let array1 = [];
let array2 = new Array();
let array3 = new Array(10);

let computer = ["CPU", "RAM", "SSD", "HDD"];

for (let i = 0; i < computer.length; i++) {
    console.log(computer[i]);
}

computer.forEach(function (item, index) {
    console.log(`${index} .${item}`);
});

//顯⽰型別 - 不精準
console.log(typeof computer);
//判斷是否為Array實例 - 精準
console.log(computer instanceof Array);
console.log(Array.isArray(computer));