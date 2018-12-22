function sumAndVat(arr) {
    let sum = null;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    let vat = sum * 0.20;
    let total = sum + vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}