const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('執行成功1');
    }, 3000);
});

//ex1
promise1
    .then(result => {
        console.log(result);
    })
    .catch(ex => {
        console.log('失敗原因 :' + ex);
    })
    .finally(() => {
        console.log('Promise finally 完成');
    });

//ex2
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('執行成功2');
    }, 3000);
});

promise2
    .then(result => {
        console.log(result);
    })
    .catch(ex => {
        console.log('失敗原因 :' + ex);
    })
    .finally(() => {
        console.log('Promise finally 完成');
    });

//ex3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('執行失敗');
    }, 3000);
});

promise3
    .then(result => {
        console.log(result);
    })
    .catch(ex => {
        console.log('失敗原因 :' + ex);
    })
    .finally(() => {
        console.log('Promise finally 完成');
    });