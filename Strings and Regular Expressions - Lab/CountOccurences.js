function countOccurences(word, input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input.substring(i, i + word.length) === word) {
            result.push(i);
        }
    }

    console.log(result.length);
}