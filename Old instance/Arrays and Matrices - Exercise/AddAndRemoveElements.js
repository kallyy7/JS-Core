function addAndRemoveElements(arr) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == "add") {
            result.push(index + 1);
        } else {
            result.pop();
        }
    }

    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join(`\n`));
    }
}

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'
]);