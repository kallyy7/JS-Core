function evenPositioneElements(arr) {
    let evenNums = [];

    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            evenNums.push(arr[index]);
        }
    }

    console.log(evenNums.join(' '));
}