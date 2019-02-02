function ArraySort(arr) {
    arr.sort();

    let result = arr.sort(function(a, b) {
        return a.length - b.length;
    })

    console.log(result.join(`\n`));
}

ArraySort(['test',
    'Deny',
    'omen',
    'Default'
]);