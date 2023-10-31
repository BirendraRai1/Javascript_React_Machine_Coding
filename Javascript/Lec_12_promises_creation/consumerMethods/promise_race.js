// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 2000, 'one');
// });
// const secondPromise = new Promise((res, rej) => {
//     // setTimeout(res, 100, 'two');
//     setTimeout((arg) => {
//         res(arg)
//     }, 2000, "two")
// });

// from wherever you get the answer
//promise.race gets result of 1st settled promise first come first serve
Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
