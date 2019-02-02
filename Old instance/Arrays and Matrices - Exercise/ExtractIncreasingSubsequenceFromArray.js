function extractDecreasingSubsequnce(arr) {
    let result = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] >= arr[i] && arr[i + 1] >= arr[0]) {
            result.push(arr[i + 1]);
        }
    }

    console.log(result.join('\n'));
}

extractDecreasingSubsequnce([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);