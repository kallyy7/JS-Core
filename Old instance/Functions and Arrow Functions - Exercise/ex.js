(function func(a) {
    console.log(a);
})(1)
// IIFE
//-----------------

let f = function func(a) {
    console.log(a);
}

//-----------------

let fu = (a) => {
    console.log(a);
}

//----------------

let increment = x => x + 1;
console.log(increment(5)); // Arrow Functions

//----------------

[10, 20, 30].filter(a => a > 15 ? console.log(a) : console.log("too small"));