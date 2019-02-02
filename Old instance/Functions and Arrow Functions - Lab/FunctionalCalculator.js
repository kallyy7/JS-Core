function calculator(firstNum, secNum, operator) {
    if (secNum != 0) {
        if (operator == "+") {
            console.log(firstNum + secNum);
        } else if (operator == "-") {
            console.log(firstNum - secNum);
        } else if (operator == "*") {
            console.log(firstNum * secNum);
        } else if (operator == "/") {
            console.log(firstNum / secNum);
        }
    }
}