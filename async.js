function doAsyncTask(cb) {
	cb();
}

doAsyncTask(function() {
let message = "Callback called"
	console.log(message)
});

//let message = "Callback called"

let p = Promise.resolve();

p.then( () => console.log("Resolved"));

// Promise.resolve("done")
// .then(val =>  {
// throw "fail";
// })
// .then(val => console.log(val))
// .catch(err => console.error(err));

Promise.resolve("done")
.then(val => {
	console.log(val);
})
.then(val => console.log(val));

