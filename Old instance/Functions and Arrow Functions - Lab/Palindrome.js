function isPalindrome(input) {
    let word = "";

    for (let index = input.length - 1; index >= 0; index--) {

        word += input[index];
    }

    if (input === word) {
        console.log("true");
    } else {
        console.log("false");
    }
}