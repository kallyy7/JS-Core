function printElement(arr) {
    let step = Number(arr.pop());
    let result = arr
        .filter((num, i) => i % step === 0)
        .join('\n')

    console.log(result);
}