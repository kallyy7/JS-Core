function oddOrEven(n) {
    if (!Number.isInteger(n)) {
        console.log("invalid")
    } else if (n % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

oddOrEven(5);