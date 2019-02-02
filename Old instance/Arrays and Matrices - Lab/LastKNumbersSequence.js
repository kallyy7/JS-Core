function lastKNumbersSequence(n, k) {
    let arr = [];
    arr[0] = 1;

    for (let index = 1; index < n; index++) {
        let start = Math.max(0, index - k);
        let sum = arr.slice(start, index)
            .reduce((a, b) => a + b);
        arr.push(sum);
    }

    console.log(arr.join(' '));
}