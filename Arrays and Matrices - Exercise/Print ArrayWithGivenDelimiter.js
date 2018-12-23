function printArray(arr) {
    let delimeter = arr[arr.length - 1];
    arr.pop();
    let result = arr[0];

    for (let index = 1; index < arr.length; index++) {
        result += delimeter + arr[index];
    }

    console.log(result);
}

printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);