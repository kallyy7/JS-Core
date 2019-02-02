function negativePositiveNumbers(arr) {
    let numbers = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            numbers.unshift(arr[index]);
        } else {
            numbers.push(arr[index]);
        }
    }

    for (let number of numbers) {
        console.log(number);
    }
}