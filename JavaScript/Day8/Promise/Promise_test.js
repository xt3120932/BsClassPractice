let p1 = Promise.resolve(35);
console.log(p1);

p1.then(result => {
    console.log(result);
})