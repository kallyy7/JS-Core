function magicMatrices(matrix) {
    let rowSum = matrix.map(r => r.reduce((a, b) => a + b));
    let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
    let checker = true;

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rowSum[i] === colSum[j]) {
                checker = true;
            } else {
                checker = false;
                break;
            }
        }
    }

    console.log(checker);
}