function letterOccurences(arr, char) {
    let sum = 0;
    for (const iterator of arr) {
        if (iterator == char) {
            sum++;
        }
    }

    console.log(sum);
}