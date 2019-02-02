function stringsOfNumbers(number) {
    let num = +number;
    let numbersResult = 1;
    for (let index = 2; index <= num; index++) {
        numbersResult += String(index);
    }

    console.log(numbersResult);
}

stringsOfNumbers('11');